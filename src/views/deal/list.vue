<template>

    <div>
        <properties-header />
        <!-- Map content start -->
        <div class="map-content content-area container-fluid">
            <div class="row">
                <!-- div .map-content-sidebar-->
                <div class="col-lg-5 col-md-6 map-content-sidebar">
                    <div class="properties-map-search properties-pad2">
                        <div class="title-area">
                            <h2 class="pull-left">Search</h2>
                            <!-- <a class="show-more-options pull-right" data-toggle="collapse" data-target="#options-content">
                        <i class="fa fa-plus-circle"></i> Show More Options
                    </a> -->
                            <div class="clearfix"></div>
                        </div>
                        <div class="properties-map-search-content">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group">
                                        <select class="selectpicker search-fields show-tick form-control" title="시/도 선택"
                                            data-size="5" data-live-search="true" v-model="city" @change="getGu">
                                            <option v-for="tcity in citys" :key="tcity" :value="tcity">{{tcity}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group">
                                        <select class="selectpicker search-fields show-tick form-control" title="구/군 선택"
                                            data-size="5" data-live-search="true" v-model="gu" @change="getDong">
                                            <option v-for="tgu in gus" :key="tgu" :value="tgu">{{tgu}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group">
                                        <select class="selectpicker search-fields show-tick form-control" title="동 선택"
                                            data-size="5" data-live-search="true" v-model="dong"
                                            @change="searchDealInfo">
                                            <option v-for="tdong in dongs" :key="tdong" :value="tdong">{{tdong}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <select id="id-select-fav"
                                            class="selectpicker search-fields show-tick form-control" title="나의 관심지역"
                                            data-size="5" data-live-search="true" v-model="favIndex"
                                            @change="selectMyFav">
                                            <option v-for="(favArea, index) in FavAreas" :key="`favArea`+index"
                                                :value="index">{{joinAddress(favArea)}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                        <!-- 추가적인 검색이다. -->
                                        <input v-model="searchName" @keyup.enter="searchDealInfoAdd"
                                         class="form-control search-fields" placeholder="아파트 이름">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="title-area hidden-sm hidden-xs">
                            <h2 class="pull-left results-for">Results For : Properties Grid</h2>
                            <!-- <div class="pull-right btns-area">
                        <a href="properties-list-leftsidebar.html" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                        <a href="properties-grid-leftside.html" class="change-view-btn"><i class="fa fa-th-large"></i></a>
                    </div> -->
                            <div class="clearfix"></div>
                            <div style="height:600px;">
                                <properties-grid v-for="(property, index) in properties" :key="`property.dong`+index"
                                    :apt-name="property.aptName" :city="FavAreas[favIndex].city"
                                    :gu="FavAreas[favIndex].gu" :dong="FavAreas[favIndex].dong"
                                    :price="property.dealAmount" />
                            </div>
                        </div>
                        <div class="fetching-properties hidden-sm hidden-xs"></div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6">
                    <div id="map" style="width:100%; height:100%;"></div>
                </div>
            </div>
        </div>
        <!-- Map content end -->
        <main-footer />
    </div>
</template>

<script>
    import http from "@/util/http-common";
    import {
        mapGetters
    } from "vuex";
    import PropertiesHeader from "@/components/properties/PropertiesHeader.vue";
    import PropertiesGrid from "@/components/properties/PropertiesGrid.vue";
    import MainFooter from "@/components/MainFooter.vue";
    import store from "@/store/store.js";

    export default {
        name: "properties",
        data() {
            return {
                citys: [],
                gus: [],
                dongs: [],

                city: '',
                gu: '',
                dong: '',
                searchName:'',

                favIndex: 0,
                exFav:0,
                map: {},
                //customOverlay 정보
                markers: [],

                properties: [],
            }
        },
        components: {
            PropertiesHeader,
            PropertiesGrid,
            MainFooter,
        },
        computed: {
            ...mapGetters(["FavAreas"]),
        },
        mounted() {
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
            $('.selectpicker').selectpicker();
            $('.selectpicker').selectpicker('refresh');

            // mCustomScrollbar initialization
            $(window)
                .resize(function () {
                    $("#map").css("height", $(this).height() - 110);
                    if ($(this).width() > 768) {
                        $(".map-content-sidebar").mCustomScrollbar({
                            theme: "minimal-dark"
                        });
                        $(".map-content-sidebar").css("height", $(this).height() - 110);
                    } else {
                        $(".map-content-sidebar").mCustomScrollbar("destroy"); //destroy scrollbar
                        $(".map-content-sidebar").css("height", "100%");
                    }
                })
                .trigger("resize");
        },
        watch: {
            FavAreas: function () {
                this.searchFavDealInfo();
            },
        },
        updated() {
            $('.selectpicker').selectpicker('refresh');
        },
        methods: {
            initMap() {
                let container = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };

                this.map = new kakao.maps.Map(container, options);
                // let mapTypeControl = new kakao.maps.mapTypeControl();

                // this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            },
            addScript() {
                const script = document.createElement('script'); /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src =
                    'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fbceee0c6fb60d6ef8ece19f476bb5fa';
                document.head.appendChild(script);
                // const script2 = document.createElement('script'); /* global kakao */
                // script2.onload = () => kakao.maps.load(this.initMap);
                // script2.src = 'http://dapi.kakao.com/v2/maps/sdk.js?appkey=fbceee0c6fb60d6ef8ece19f476bb5fa&libraries=services,clusterer';
                // document.head.appendChild(script2);
                // this.addScript2();
            },
            getGu() {
                let msg = '구,군 정보를 가져올 수 없습니다.';
                http
                    .post('/util/gu', {
                        'city': this.city
                    })
                    .then(({
                        data
                    }) => {
                        this.gus = data;
                        this.gu = '';
                        this.dong = '';
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function () {
                            console.log(this.city);
                        });
                    })
            },
            getDong() {
                let msg = '동 정보를 가져올 수 없습니다.';
                http
                    .post('/util/dong', {
                        'gu': this.gu
                    })
                    .then(({
                        data
                    }) => {
                        this.dongs = data;
                        this.dong = '';
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function () {
                            console.log(msg);
                        });
                    })
            },
            searchDealInfo() {
                // 해당 시,구,동 정보를 이용하여 해당 아파트 거래 정보 가져오기
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                obj.city = this.city;
                obj.gu = this.gu;
                obj.dong = this.dong;

                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        if (data.length != 0) {
                            this.favIndex = '';
                            this.properties = [];
                            this.makeMarker(data);
                        }
                        else{
                            msg = '해당 지역의 거래정보가 없습니다.';
                            this.dong='';
                            alertify.error(msg, 3, function () {
                                console.log(msg);
                            });
                        }
                    })
                    .catch((error) => {
                        alertify.error(msg, 3, function () {
                            console.log(error);
                        });
                    })

            },
            searchDealInfoAdd() {
                // 해당 시,구,동 정보를 이용하여 해당 아파트 거래 정보 가져오기
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                //만일 직접 검색했다면 직접 검색한 것으로 채우고
                //아니라면 관심지역으로 검색하기.
                this.city && this.gu && this.dong
                    && ((obj.city = this.city),(obj.gu = this.gu),(obj.dong = this.dong))
                    || ((obj.city = this.FavAreas[this.favIndex].city),
                        (obj.gu = this.FavAreas[this.favIndex].gu),
                        (obj.dong = this.FavAreas[this.favIndex].dong));

                //

                // obj.city = this.city;
                // obj.gu = this.gu;
                // obj.dong = this.dong;
                obj.aptName = this.searchName;


                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        //데이터가 없는경우 거래정보 없다고 표기
                        if (data.length != 0) {
                            this.properties = [];
                            this.dong || ((this.city=''), (this.gu=''), (this.dong=''))
                            
                            this.makeProperties(data);
                            this.makeMarker(data);
                        }
                        else{
                            msg = '해당 조건의 거래정보가 없습니다.';
                            alertify.error(msg, 3, function () {
                                console.log(msg);
                            });
                        }
                    })
                    .catch((error) => {
                        alertify.error(msg, 3, function () {
                            console.log(error);
                        });
                    })

            },
            searchFavDealInfo() {
                console.log('favIndex : ' + this.favIndex);
                console.log(this.favIndex === '');
                if (this.favIndex === '') {
                    return;
                }
                console.log('favIndex@ : ');
                // 해당 관심구역 정보를 이용하여 아파트 거래 1개만 정보 가져오기
                // + 첫번째 정보로 중심이동
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                let temp = store.state.FavAreas;
                console.dir(temp);
                // console.dir(this.FavAreas);
                // console.log(this.favIndex);
                obj.city = this.FavAreas[this.favIndex].city;
                obj.gu = this.FavAreas[this.favIndex].gu;
                obj.dong = this.FavAreas[this.favIndex].dong;

                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        //데이터가 없는경우 거래정보 없다고 표기
                        if (data.length != 0) {
                            this.makeProperties(data);
                            this.makeMarker(data);
                        } else {
                            msg = '해당 지역의 거래정보가 없습니다.';
                            this.favIndex = this.exFav;
                            alertify.error(msg, 3, function () {
                                console.log(msg);
                            });
                        }
                    })
                    .catch((error) => {
                        alertify.error(msg, 3, function () {
                            console.log(error);
                        });
                    })
            },
            joinAddress(favArea) {
                return favArea.city + ' ' + favArea.gu + ' ' + favArea.dong;
            },
            selectMyFav() {
                this.city = '';
                this.gu = '';
                this.dong = '';
                // this.exFav = this.favIndex;
                this.searchFavDealInfo();
            },
            makeProperties(data) {
                this.properties = [];
                for (let idx = 0; idx < data.length - 1; ++idx) {
                    let obj = new Object();
                    obj.aptName = data[idx].aptName;
                    obj.dealAmount = data[idx].dealAmount;
                    this.properties.push(obj);
                }
            },
            // map에 불러온 marker를 표시한다.
            makeMarker(data) {
                console.dir(data.length);
                // console.dir(kakao.maps);
                if (data.length == 0) {
                    let msg = "거래 정보가 존재하지 않습니다.";
                    alertify.error(msg, 3, function () {
                        console.log(msg);
                    });
                    return;
                }
                let obj;
                // let positions = {};

                // var clusterer = new kakao.maps.MarkerClusterer({
                //     map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                //     averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                //     minLevel: 10 // 클러스터 할 최소 지도 레벨 
                // });
                // clusterer.clear();
                // 마커 이미지의 이미지 주소입니다
                // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                // let imageSize = new kakao.maps.Size(24, 35);
                // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                this.removeMarkers();
                
                for (let idx = 0; idx < data.length - 1; ++idx) {
                    obj = new Object();
                    obj.title = data[idx].aptName;
                    obj.latlng = new kakao.maps.LatLng(data[idx].lat, data[idx].lng);
                    // console.dir(obj);
                    //클러스터에 추가

                    // 마커를 생성합니다
                    // let marker = new kakao.maps.Marker({
                    //     map: this.map, // 마커를 표시할 지도
                    //     position: obj.latlng, // 마커를 표시할 위치
                    //     title: obj.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    //     image: markerImage, // 마커 이미지
                    //     clickable: true
                    // });
                    // marker.setMap(this.map);

                    // let iwRemoveable = true;

                    let iwContent = '<div class="customoverlay">' +
                        '<a href="#" target="_blank">' +
                        '<span class="title">' + obj.title + '</span>' +
                        '</a></div>';
                    let position = obj.latlng;
                    let mapCustomOverlay = new kakao.maps.CustomOverlay({
                        content: iwContent,
                        position: position,
                        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
                        yAnchor: 1.1 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
                    });
                    // var infowindow = new kakao.maps.InfoWindow({
                    //     // map: this.map,
                    //     position: obj.latlng,
                    //     content: 'I am InfoWindow'
                    // });

                    mapCustomOverlay.setMap(this.map);
                    // infowindow.open(this.map, marker);
                    // kakao.maps.event.addListener(marker, 'click', function () {
                    //     // 마커 위에 인포윈도우를 표시합니다
                    //     console.log('click!!');
                    //     infowindow.open(this.map, marker);
                    // });
                    // let s = this.makeInfoWindow(data[idx])

                    this.markers.push(mapCustomOverlay);
                }
                this.map.panTo(new kakao.maps.LatLng(data[0].lat, data[0].lng));
                // clusterer.addMarkers(positions);
            },
            removeMarkers() {
                let size = this.markers.length;
                for (var i = 0; i < size; i++) {
                    this.markers[i].setMap(null);
                }
                this.markers = [];
            },
        },
        created() {
            let msg = '시/도 정보를 가져올 수 없습니다.';
            store.dispatch("getFavAreas", this.$session.get('userId'));

            http
                .get('/util/city')
                .then(({
                    data
                }) => {
                    this.citys = data;
                    console.dir(data);
                })
                .catch(() => {
                    alertify.error(msg, 3, function () {
                        console.log(msg);
                    });
                });
        },
    }
</script>

<style>
    .customoverlay:nth-of-type(n) {
        border: 0;
        box-shadow: 0px 1px 2px #888;
    }

    .customoverlay a {
        display: block;
        text-decoration: none;
        color: #000;
        text-align: center;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        background: #d95050;
        background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
    }

    .customoverlay .title {
        display: block;
        text-align: center;
        background: #fff;
        margin-right: 35px;
        padding: 10px 15px;
        font-size: 14px;
        font-weight: bold;
    }

    .customoverlay:after {
        content: '';
        position: absolute;
        margin-left: -12px;
        left: 50%;
        bottom: -12px;
        width: 22px;
        height: 12px;
        background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')
    }
</style>