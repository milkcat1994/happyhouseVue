<template>
    <div ref="houseDetail">

        <main-header />
        <sub-banner :title="House.aptName" />

        <!-- Properties details page start -->
        <div class="properties-details-page content-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <!-- Heading properties 3 start -->
                        <div class="heading-properties-3">
                            <div class="clearfix">
                                <div class="pull-left">
                                    <h1>{{House.aptName}}</h1>
                                </div>
                                <div class="pull-right">
                                    <h1><span>{{House.dealAmount}}만원</span></h1>
                                </div>
                            </div>
                            <div class="clearfix">
                                <div class="pull-left">
                                    <p><i class="flaticon-pin"></i>{{House.dong}} </p>
                                </div>
                                <div class="pull-right">
                                    <p><span>{{getPriceAtArea}}만원 / m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </div>
                        <!-- main slider carousel items -->
                        <div id="propertiesDetailsSlider" class="carousel properties-details-sliders slide mb-40">
                            <div class="carousel-inner">
                                <div class="active item carousel-item" data-slide-number="0">
                                    <img :src="getUrl(House.img)" class="img-fluid" style="width:730px; height:486px"
                                        alt="slider-properties">
                                </div>
                            </div>
                        </div>
                        <!-- Floor plans start -->
                        <h3 class="heading-2">거래내역</h3>
                        <v-app id="inspire" class=" mb-50">
                            <v-data-table :headers="headers" :items="Houses" multi-sort 
                                :footer-props="{'disable-items-per-page': true,}" class="elevation-1">
                                <template v-slot:header.name="{ header }">
                                    {{ header.text.toUpperCase() }}
                                </template>
                            </v-data-table>
                        </v-app>
                        <!-- Floor plans start -->
                        <!-- <h3 class="heading-2">주변 환경점검 정보</h3> -->
                        <v-app id="inspire" class=" mb-50">
                            <v-card>
                            <v-card-title>
                                주변 환경 점검 정보
                                <v-spacer></v-spacer>
                                <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                                ></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="envHeaders" :items="Envs" multi-sort :search="search"
                                :footer-props="{'disable-items-per-page': true,}" class="elevation-1">
                                <template v-slot:header.name="{ header }">
                                    {{ header.text.toUpperCase() }}
                                </template>
                            </v-data-table>
                            </v-card>
                        </v-app>
                        <!-- Location start -->
                        <div class="location mb-50">
                            <div class="map">
                                <h3 class="heading-2">Property Location</h3>
                                <div id="map" class="contact-map"></div>
                            </div>
                        </div>
                        <!-- Similar Properties start -->
                        <h3 class="heading-2">Similar Properties</h3>
                        <!-- Featured Properties start -->
                        <v-app id="inspire" style="height:400px">
                            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(neerHouse, index) in NeerPriceHosues" :key="index">
                                    <v-card class="mx-auto" max-width="344">
                                        <v-img :src="getUrl(neerHouse.img)" height="200px">
                                        </v-img>

                                        <v-card-title>
                                            {{neerHouse.aptName}}
                                        </v-card-title>

                                        <v-card-subtitle>
                                            {{neerHouse.dealAmount}}만원
                                        </v-card-subtitle>

                                        <v-card-actions>
                                            <v-btn text @click="searchDetail(neerHouse.no,neerHouse.dong)">자세히</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-carousel-item>
                            </v-carousel>
                        </v-app>
                        <!-- Featured Properties end -->
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="sidebar-right">
                            <!-- Recent properties start -->
                            <div class="widget recent-properties">
                                <h3 class="sidebar-title">최근 항목</h3>
                                <div class="s-border"></div>
                                <div class="m-border"></div>
                                <div v-for="(recent, index) in RecentHouse" :key="index" :class="{'mb-4' : index != 2}"
                                    class="media recent-clickable" id="" @click="searchDetail(recent.no,recent.dong)">
                                    <a class="pr-3">
                                        <img class="media-object" :src="getUrl(recent.img)" alt="small-properties">
                                    </a>
                                    <div class="media-body align-self-center">
                                        <h5>
                                            <a>{{recent.aptName}}</a>
                                        </h5>
                                        <div class="listing-post-meta">
                                            {{recent.dealAmount}}만원 | <a><i class="fa fa-calendar"></i>
                                                {{recent.dealYear}} </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Properties details page end -->


        <main-footer />
    </div>
</template>

<script>
    import store from "@/store/store.js";
    import {
        moveScrollTop
    } from "@/util/scroll-common";
    import {
        mapGetters
    } from "vuex";
    import SubBanner from "@/components/SubBanner.vue";

    import MainHeader from "@/components/MainHeader.vue";
    import MainFooter from "@/components/MainFooter.vue";
    export default {
        name: "housedetail",
        data() {
            return {
                name: '',
                map: '',
                headers: [{
                        text: '거래일시',
                        value: 'dealDate'
                    },
                    {
                        text: '면적',
                        value: 'area'
                    },
                    {
                        text: '가격(만)',
                        value: 'dealAmount'
                    },
                    {
                        text: '위치(층)',
                        value: 'floor'
                    },
                ],
                envHeaders: [{
                        text: '업체명',
                        value: 'name'
                    },
                    {
                        text: '주소',
                        value: 'address'
                    },
                    {
                        text: '업종명',
                        value: 'bizname'
                    },
                ],
                search:'',
            }
        },
        components: {
            MainHeader,
            SubBanner,
            MainFooter
        },
        computed: {
            ...mapGetters(["House"]),
            ...mapGetters(["Houses"]),
            ...mapGetters(["RecentHouse"]),
            ...mapGetters(["NeerPriceHosues"]),
            ...mapGetters(["Envs"]),
            getPriceAtArea() {
                return (this.House.dealAmount.replace(/\,/g, "") / this.House.area).toFixed(1);
            }
        },
        mounted() {
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
        },
        created() {
            const self = this;
            store.dispatch("getHouse", {
                    no: this.$route.query.no,
                    dong: this.$route.query.dong,
                })
                .then(() => {
                    store.dispatch("getNeerPriceHouses", self.House.dealAmount);
                    store.dispatch("getHouses", this.$route.query.no);

                    store.dispatch("getEnvs", {city:'', gu:'', dong:self.House.dong})
                    .then((data) => {
                        if(!data){
                            alertify.error("해당 지역의 환경점검정보이 없습니다.", 3,
                                function() { console.log("해당 지역의 환경점검이 없습니다."); });
                        }
                        else{
                            // self.makeEnvMarker(data);
                        }
                    });
                    self.makeMarker();
                })
        },
        methods: {
            getUrl(img) {
                if (!img) return '/img/house/unknown.png';
                return "/img/house/" + img;
            },
            searchDetail(no, dong) {
                const self = this;
                console.log(no + "<<>>" + $.trim(dong));
                store.dispatch("getHouse", {
                        no: no,
                        dong: $.trim(dong),
                    })
                    .then((data) => {
                        store.dispatch("saveRecentHouse",data);
                        store.dispatch("getHouses", data.no);
                    })
                    .then(() => {
                        store.dispatch("getNeerPriceHouses", self.House.dealAmount)
                        self.makeMarker();
                    })

                moveScrollTop();
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
            makeMarker() {
                let obj;
                // this.removeMarkers();

                obj = new Object();
                obj.title = this.House.aptName;
                obj.latlng = new kakao.maps.LatLng(this.House.lat, this.House.lng);
                console.log('makeMarker>>');
                console.dir(this.House);
                let iwContent = '<div class="customoverlay">' +
                    '<a href="http://www.kcrbds.co.kr/search/search.php?kwd=' +
                    this.makeUrl(this.House.dong, this.House.aptName) + '" target="_blank">' +
                    '<span class="title">' + obj.title + '</span>' +
                    '</a></div>';

                let position = obj.latlng;
                let mapCustomOverlay = new kakao.maps.CustomOverlay({
                    content: iwContent,
                    position: position,
                    clickable: true,
                    xAnchor: 0.5,
                    yAnchor: 1.1
                });

                mapCustomOverlay.setMap(this.map);
                // this.markers.push(mapCustomOverlay);


                this.map.panTo(new kakao.maps.LatLng(this.House.lat, this.House.lng));
            },
            makeUrl(dong, name) {
                return $.trim(dong) + '+' + name.replace(' ', '+');
            },
        }

    }
</script>

<style>
    .recent-clickable :hover {
        cursor: pointer;
    }
</style>