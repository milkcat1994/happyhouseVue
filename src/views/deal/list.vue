<template>

    <div>
        <properties-header />
        <!-- Map content start -->
        <div class="map-content content-area container-fluid">
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
                            <!-- searchDealInfo event는 이곳에서 사용 -->
                            <!-- <select class=" search-fields show-tick form-control" title="시/도 선택"
                                data-size="5" data-live-search="true" v-model="address"> -->
                            <!-- select의 검색 결과에 따라 option동적 추가 -> 최대 5개 -->
                            <!-- <option></option> -->
                            <!-- <option v-for="(add, index) in showAddresses" :key="index" :value="add.dong">{{add.dong}}</option>
                            </select> -->
                            <v-app id="inspire">
                                <v-autocomplete height="50" v-model="address" :loading="loading"
                                    :items="showAddresses" :search-input.sync="search" :blur="searchDealInfo" @keyup.enter.prevent="searchDealInfo" cache-items
                                    class="mx-4" hide-no-data hide-details label="주소 검색" solo
                                    :menu-props="{ 'nudge-top':200, 'nudge-left':20, 'z-index':9999}"></v-autocomplete>
                            </v-app>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="form-group">
                                <!-- <select id="id-select-fav" class=" search-fields show-tick form-control" title="나의 관심지역"
                                    data-size="5" data-live-search="true" v-model="favIndex" @change="selectMyFav">
                                    <option v-for="(favArea, index) in FavAreas" :key="`favArea`+index" :value="index">
                                        {{joinAddress(favArea)}}</option>
                                </select> -->

                                <v-app id="inspire">
                                    <v-select :items="showFav" label="Solo field" :blur="searchFavDealInfo" solo @keyup.enter.prevent="searchFavDealInfo"
                                        :menu-props="{ 'nudge-top':152, 'nudge-left':20, 'z-index':9999}"></v-select>
                                </v-app>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="form-group">
                                <!-- 추가적인 검색이다. -->
                                <input v-model="searchName" @keyup.enter="searchDealInfoAdd"
                                    class="form-control search-fields" placeholder="아파트 이름">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end search -->
            <div class="row below-content">
                <!-- div .map-content-sidebar-->
                <div class="col-lg-5 col-md-6 ">
                    <div class="title-area hidden-sm hidden-xs">
                        <h2 class="pull-left results-for">거래정보</h2>
                        <!-- <div class="pull-right btns-area">
                        <a href="properties-list-leftsidebar.html" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                        <a href="properties-grid-leftside.html" class="change-view-btn"><i class="fa fa-th-large"></i></a>
                        </div> -->
                        <div class="clearfix"></div>
                        <!-- style="height:600px;"  -->
                        <div class="mb-50" id="scrolldiv" v-on:scroll.passive="hasScrolled()"
                            style="height:600px; overflow-y:scroll; overflow-x:hidden;">
                            <div class="row">
                                <properties-grid v-for="(data, index) in showData" :key="`${data.dong}`+index"
                                    :property="data" />
                            </div>
                        </div>
                    </div>
                    <div class="fetching-properties hidden-sm hidden-xs"></div>
                </div>
                <div class="col-lg-7 col-md-6 mb-50" id="mapWrapper">
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
                addresses: [],
                showAddresses: [],
                address: null,
                searchName: '',

                showFav: [],
                favIndex: 0,
                exFav: 0,
                map: {},
                //customOverlay 정보
                markers: [],

                properties: [],
                didScroll: false,
                showData: [],
                scrollBlock: 0,
                endIndex: 20,

                loading: false,
                search: null,
                select: null,

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
        destroyed() {
            console.log('destory');
        },
        mounted() {
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();

        },
        watch: {
            FavAreas: function () {
                this.searchFavDealInfo();
                this.makeFav(this.FavAreas);
            },
            search(val) {
                console.log('val>>>' + val);
                console.log('select>>>' + this.address);
                val && val !== this.address && this.querySelections(val)
            },
            select(value) {
                console.log('in1');
                // dialog opened (value is true) in edit mode (editedIndex > -1)
                if (value && this.editedIndex > -1) {
                    searchDealInfo();
                }
            }
        },
        updated() {
            // this.$nextTick(function () {
            //     $('.selectpicker').selectpicker('refresh')
            // });
        },
        methods: {
            // setItems(value) {
            //     console.log('in2');
            //     if (value && value.length > 0) {
            //         if (Array.isArray(value)) {
            //             this.items = value
            //         } else {
            //             this.items.push(value)
            //         }
            //     }
            // },
            hasScrolled() {
                // console.log('slef>>')
                let st = document.getElementById('scrolldiv').scrollTop;
                let sh = document.getElementById('scrolldiv').scrollHeight;
                let oh = document.getElementById('scrolldiv').offsetHeight;
                // console.dir(st+','+sh+','+oh+','+(st+oh)+','+(sh === (st+oh)));
                if (sh === (st + oh)) {
                    this.scrollBlock++;
                    this.endIndex = 20 + (20 * this.scrollBlock);
                    this.showData = this.properties.slice(0, this.endIndex);
                    // console.log('slice!!!!!!!!!');
                }
            },
            initMap() {
                let container = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5
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
            },
            //index >> 0,1,2
            getAddress(address, index) {
                return address.split(' ')[index];
            },
            makeFav(data) {
                this.showFav = [];
                for (let idx in data) {
                    this.showFav.push(this.joinAddress(data[idx]));
                }
            },
            makeObjectToAddress(data) {
                this.showAddresses = [];
                for (let idx in data) {
                    this.showAddresses.push(data[idx].city.concat(' ', data[idx].gu, ' ', data[idx].dong));
                }
            },
            searchDealInfo() {
                // 해당 시,구,동 정보를 이용하여 해당 아파트 거래 정보 가져오기
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};

                obj.dong = this.getAddress(this.address, 2);


                let self = this;
                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        if (data.length != 0) {
                            self.favIndex = '';

                            console.log('test>>');
                            console.dir(data);
                            self.makeProperties(data);
                            self.makeMarker(data);
                        } else {
                            msg = '해당 지역의 거래정보가 없습니다.';
                            self.address = '';
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
                if (this.favIndex === '') {
                    return;
                }
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                // let temp = store.state.FavAreas;
                // console.dir(temp);
                // console.dir(this.FavAreas);
                // console.log(this.favIndex);
                obj.dong = this.FavAreas[this.favIndex].dong;

                let self = this;
                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        //데이터가 없는경우 거래정보 없다고 표기
                        if (data.length != 0) {
                            self.makeProperties(data);
                            self.makeMarker(data);
                        } else {
                            msg = '해당 지역의 거래정보가 없습니다.';
                            self.favIndex = self.exFav;
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
                this.address &&
                    (obj.dong = this.getAddress(this.address, 2)) ||
                    (obj.dong = this.FavAreas[this.favIndex].dong);

                obj.aptName = this.searchName;

                let self = this;
                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        //데이터가 없는경우 거래정보 없다고 표기
                        if (data.length != 0) {
                            self.makeProperties(data);
                            self.makeMarker(data);
                        } else {
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
            joinAddress(favArea) {
                return favArea.city + ' ' + favArea.gu + ' ' + favArea.dong;
            },
            //customOverlay클릭시 url이동위해 url제작
            makeUrl(dong, name) {
                return $.trim(dong) + '+' + name.replace(' ', '+');
            },
            selectMyFav() {
                this.address = '';
                this.searchFavDealInfo();
            },
            makeProperties(data) {
                this.properties = [];
                let tobj = {};
                console.log('start makeProperties '+ this.address);
                this.address &&
                    ((tobj.city = this.getAddress(this.address, 0)), (tobj.gu = this.getAddress(this.address, 1)), (tobj.dong = this.getAddress(this.address, 2))) ||
                    ((tobj.city = this.FavAreas[this.favIndex].city), (tobj.gu = this.FavAreas[this.favIndex].gu), (tobj.dong = this.FavAreas[this.favIndex].dong));

                for (let idx = 0; idx < data.length; ++idx) {
                    let obj = new Object();
                    obj.no = data[idx].no;
                    obj.aptName = data[idx].aptName;
                    obj.dealAmount = data[idx].dealAmount;
                    obj.buildYear = data[idx].buildYear;
                    obj.dealYear = data[idx].dealYear;
                    obj.area = data[idx].area;
                    obj.floor = data[idx].floor;
                    obj.jibun = data[idx].jibun;
                    obj.img = data[idx].img;
                    obj.lat = data[idx].lat;
                    obj.lng = data[idx].lng;

                    obj.city = tobj.city;
                    obj.gu = tobj.gu;
                    obj.dong = tobj.dong;
                    this.properties.push(obj);
                }
                this.showData = this.properties.slice(0, this.endIndex);
                console.log('end makeProperties'+this.properties.length);
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
                        '<a href="http://www.kcrbds.co.kr/search/search.php?kwd=' +
                        this.makeUrl(data[idx].dong, data[idx].aptName) + '" target="_blank">' +
                        '<span class="title">' + obj.title + '</span>' +
                        '</a></div>';
                    let position = obj.latlng;
                    let mapCustomOverlay = new kakao.maps.CustomOverlay({
                        content: iwContent,
                        position: position,
                        clickable: true,
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
            querySelections(v) {
                this.loading = true
                // Simulated ajax query
                console.log('in>>');
                setTimeout(() => {
                    this.showAddresses = this.addresses.filter(e => {
                        console.dir(e);
                        return (e.address || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                    this.loading = false
                }, 500)
            },

        },
        created() {
            store.dispatch("getFavAreas", this.$session.get('userId'));

            let msg = '주소 정보를 가져올 수 없습니다.';
            http
                .get('/util/address')
                .then(({
                    data
                }) => {
                    this.makeObjectToAddress(data);
                    console.log('success get addresses');
                    // console.dir(data);
                })
                .catch((error) => {
                    alertify.error(msg, 3, function () {
                        console.log(error);
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

    #mapWrapper {
        padding-top: 25px;
    }

    #scrolldiv::-webkit-scrollbar {
        width: 6px;
    }

    #scrolldiv::-webkit-scrollbar-track {
        background-color: transparent;
    }

    #scrolldiv::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: gray;
    }

    #scrolldiv::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }

    .below-content {
        padding-left: 25px;
    }
</style>