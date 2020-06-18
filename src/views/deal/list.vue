<template>

    <div>
        <properties-header />
        <!-- Map content start -->
        <div class="map-content content-area container-fluid">
            <div class="properties-map-search properties-pad2">
                <div class="title-area">
                    <h2 class="pull-left">Search</h2>
                    <div class="clearfix"></div>
                </div>
                <div class="properties-map-search-content">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <v-app id="inspire">
                                <!-- 주소로 검색 -->
                                <v-autocomplete height="50" v-model="address" :loading="loading"
                                    :items="showAddresses" :search-input.sync="search" @keyup.enter.prevent="searchDealInfo" no-filter
                                    class="mx-4" hide-no-data hide-details label="주소 검색" solo
                                    :menu-props="{ 'nudge-top':200, 'nudge-left':20, 'z-index':9999}"></v-autocomplete>
                            </v-app>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="form-group">
                                <!-- 관심지역으로 검색 -->
                                <v-app id="inspire">
                                    <v-select :items="showFav" v-model="favAddress" label="관심지역"  solo @keyup.enter.prevent="searchFavDealInfo" :search-input.sync="favSearch"
                                        :menu-props="{ 'nudge-top':152, 'nudge-left':20, 'z-index':9999}"></v-select>
                                </v-app>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            
                            <v-app id="inspire">
                                <!-- 주소로 검색 -->
                                <v-autocomplete height="50" v-model="searchName" :loading="loading2"
                                    :items="showHouseNames" :search-input.sync="search2" @keyup.enter.prevent="searchDealInfoAdd" no-filter
                                    class="mx-4" hide-no-data hide-details label="아파트 이름 검색" solo
                                    :menu-props="{ 'nudge-top':200, 'nudge-left':20, 'z-index':9999}"></v-autocomplete>
                            </v-app>
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
    import {bestSearch} from "@/util/search-common";

    export default {
        name: "properties",
        data() {
            return {
                addresses: [],
                showAddresses: [],
                address: null,
                favAddress: null,
                showFavAddress:[],
                searchName: '',

                showFav: [],
                favIndex: 0,
                exFav: 0,
                map: {},
                //customOverlay 정보
                markers: [],
                storeMarkers: [],

                properties: [],
                didScroll: false,
                showData: [],
                scrollBlock: 0,
                endIndex: 20,

                loading: false,
                search: null,
                select: null,

                favSearch:0,

                showHouseNames:[],
                loading2: false,
                search2: null,

                
            }
        },
        components: {
            PropertiesHeader,
            PropertiesGrid,
            MainFooter,
        },
        computed: {
            ...mapGetters(["FavAreas"]),
            ...mapGetters(["HouseName"]),
        },
        destroyed() {
            console.log('destory');
        },
        mounted() {
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
        },
        watch: {
            FavAreas: function () {
                if(this.FavAreas.length>0){
                    this.favAddress = this.joinAddress(this.FavAreas[0]);
                }
            },
            search(val) {
                val && val !== this.address && this.querySelections(val)
            },
            search2(val) {
                val && val !== this.searchName && this.querySelections2(val)
            },
            favAddress(val) {
                if(this.favAddress){
                    this.address = null;
                    this.makeFav(this.FavAreas);
                    this.searchFavDealInfo();
                }
            },
            address(val){
                if(this.address){
                    this.favAddress = null;
                    this.searchDealInfo();
                }
            },
            searchName(val){
                if(this.searchName){
                    this.searchDealInfoAdd();
                }
            },
        },
        methods: {
            searchIdx(value) {
                if(this.address){
                    this.favAddress = null;
                    this.searchDealInfo();
                }
            },
            hasScrolled() {
                let st = document.getElementById('scrolldiv').scrollTop;
                let sh = document.getElementById('scrolldiv').scrollHeight;
                let oh = document.getElementById('scrolldiv').offsetHeight;
                if (sh === (st + oh)) {
                    this.scrollBlock++;
                    this.endIndex = 20 + (20 * this.scrollBlock);
                    this.showData = this.properties.slice(0, this.endIndex);
                }
            },
            initMap() {
                let container = document.getElementById('map');
                let options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 5
                };

                this.map = new kakao.maps.Map(container, options);
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
                this.addresses = [];
                for (let idx in data) {
                    this.addresses.push(data[idx].city.concat(' ', data[idx].gu, ' ', data[idx].dong));
                }
            },
            searchDealInfo() {
                console.log('searchDealInfo');
                // 해당 시,구,동 정보를 이용하여 해당 아파트 거래 정보 가져오기
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};

                obj.city = this.getAddress(this.address, 0);
                obj.gu = this.getAddress(this.address, 1);
                obj.dong = this.getAddress(this.address, 2);


                let self = this;
                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        if (data.length != 0) {
                            self.favIndex = '';
                            this.searchName = '';
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
                    store.dispatch("getStores", obj)
                    .then((data) => {
                        if(!data){
                            alertify.error("상가정보가 없습니다.", 3,
                                function() { console.log("상가정보가 없습니다."); });
                        }
                        else{
                            self.makeStoreMarker(data);
                        }
                    });
            },
            searchFavDealInfo() {
                console.log('favAddress : ' + this.favAddress);
                if (!this.favAddress) {
                    return;
                }
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                obj.city = this.getAddress(this.favAddress, 0);
                obj.gu = this.getAddress(this.favAddress, 1);
                obj.dong = this.getAddress(this.favAddress,2);

                let self = this;
                http
                    .post('/housedeal', obj)
                    .then(({
                        data
                    }) => {
                        //데이터가 없는경우 거래정보 없다고 표기
                        if (data.length != 0) {
                            this.searchName = '';
                            self.makeProperties(data);
                            self.makeMarker(data);
                        } else {
                            msg = '해당 지역의 거래정보가 없습니다.';
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
                    store.dispatch("getStores", obj)
                    .then((data) => {
                        if(!data){
                            alertify.error("상가정보가 없습니다.", 3,
                                function() { console.log("상가정보가 없습니다."); });
                        }
                        else{
                            self.makeStoreMarker(data);
                        }
                    });
            },
            searchDealInfoAdd() {
                console.log('searchDealInfoAdd');
                // 해당 시,구,동 정보를 이용하여 해당 아파트 거래 정보 가져오기
                ///api/housedeal
                let msg = '거래정보를 가져올 수 없습니다.';
                let obj = {};
                //만일 직접 검색했다면 직접 검색한 것으로 채우고
                //아니라면 관심지역으로 검색하기.
                this.address &&
                    ((obj.city = this.getAddress(this.address, 0)), (obj.gu = this.getAddress(this.address, 1)), (obj.dong = this.getAddress(this.address, 2))) ||
                    ((obj.city = this.getAddress(this.favAddress, 0)),(obj.gu = this.getAddress(this.favAddress, 1)), (obj.dong = this.getAddress(this.favAddress,2)));

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
                    store.dispatch("getStores", obj)
                    .then((data) => {
                        if(!data){
                            alertify.error("상가정보가 없습니다.", 3,
                                function() { console.log("상가정보가 없습니다."); });
                        }
                        else{
                            self.makeStoreMarker(data);
                        }
                    });
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
                this.address &&
                    ((tobj.city = this.getAddress(this.address, 0)), (tobj.gu = this.getAddress(this.address, 1)), (tobj.dong = this.getAddress(this.address, 2))) ||
                    ((tobj.city = this.getAddress(this.favAddress,0)), (tobj.gu = this.getAddress(this.favAddress,1)), (tobj.dong = this.getAddress(this.favAddress,2)));

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
            },
            // map에 불러온 marker를 표시한다.
            makeMarker(data) {
                if (data.length == 0) {
                    let msg = "거래 정보가 존재하지 않습니다.";
                    alertify.error(msg, 3, function () {
                        console.log(msg);
                    });
                    return;
                }
                let obj;
                this.removeMarkers();

                for (let idx = 0; idx < data.length; ++idx) {
                    obj = new Object();
                    obj.title = data[idx].aptName;
                    obj.latlng = new kakao.maps.LatLng(data[idx].lat, data[idx].lng);

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
                        yAnchor: 0.5 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
                    });

                    mapCustomOverlay.setMap(this.map);
                    this.markers.push(mapCustomOverlay);
                }

                this.map.panTo(new kakao.maps.LatLng(data[0].lat, data[0].lng));
            },
            makeStoreMarker(data) {
                if (data.length == 0) {
                    let msg = "상가 정보가 존재하지 않습니다.";
                    alertify.error(msg, 3, function () {
                        console.log(msg);
                    });
                    return;
                }
                let size = this.storeMarkers.length;
                for (var i = 0; i < size; i++) {
                    this.storeMarkers[i].setMap(null);
                }
                this.storeMarkers = [];

                let obj;

                // 상가마커 이미지의 저작권
                // Icon made by Freepik from www.flaticon.com
                //  <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a>

                // Icon made by iconixar from www.flaticon.com
                // <a href="https://www.flaticon.com/kr/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a>

                let imageSrc = "/img/storeMarker.png";
                let imageSize = new kakao.maps.Size(34, 45);
                let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                for (let idx = 0; idx < data.length; ++idx) {
                    obj = new Object();
                    obj.latlng = new kakao.maps.LatLng(data[idx].lat, data[idx].lng);
                    //클러스터에 추가

                    // 마커를 생성합니다
                    let marker = new kakao.maps.Marker({
                        map: this.map, // 마커를 표시할 지도
                        position: obj.latlng, // 마커를 표시할 위치
                        title: obj.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image: markerImage, // 마커 이미지
                        clickable: true
                    });
                    
                    let iwContent = '<div class ="label"><span class="left"></span><span class="center">'+data[idx].shopname+'</span><span class="right"></span></div>';
                    let position = obj.latlng;
                    let mapCustomOverlay = new kakao.maps.CustomOverlay({
                        content: iwContent,
                        position: position,
                        clickable: true,
                        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
                        yAnchor: 1.2 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
                    });
                    mapCustomOverlay.setMap(this.map);
                    
                    marker.setMap(this.map);

                    this.storeMarkers.push(marker);
                    this.storeMarkers.push(mapCustomOverlay);
                }
                this.map.panTo(new kakao.maps.LatLng(data[0].lat, data[0].lng));
            },
            removeMarkers() {
                let size = this.markers.length;
                for (var i = 0; i < size; i++) {
                    this.markers[i].setMap(null);
                }
                this.markers = [];
            },
            querySelections(v) {
                const self = this;
                self.loading = true
                    setTimeout(() => {
                        self.showAddresses = self.addresses.filter(e => {
                        return bestSearch(e, v);
                    })
                    self.loading = false
                }, 500)
            },
            querySelections2(v) {
                const self = this;
                self.loading2 = true
                    setTimeout(() => {
                        self.showHouseNames = self.HouseName.filter(e => {
                        return bestSearch(e, v);
                    })
                    self.loading2 = false
                }, 500)
            },

        },
        created() {
            store.dispatch("getFavAreas", this.$session.get('userId'));
            store.dispatch("getHouseName");

            let msg = '주소 정보를 가져올 수 없습니다.';
            http
                .get('/util/address')
                .then(({
                    data
                }) => {
                    this.makeObjectToAddress(data);
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

    /* .label {margin-bottom: 96px;} */
.label * {display: inline-block;vertical-align: top;}
.label .left {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_l.png") no-repeat;display: inline-block;height: 24px;overflow: hidden;vertical-align: top;width: 7px;}
.label .center {background: url(https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_bg.png) repeat-x;display: inline-block;height: 24px;font-size: 12px;line-height: 24px;}
.label .right {background: url("https://t1.daumcdn.net/localimg/localimages/07/2011/map/storeview/tip_r.png") -1px 0  no-repeat;display: inline-block;height: 24px;overflow: hidden;width: 6px;}
</style>