<template>
    <!-- Featured Properties start -->
    <div class="container">
        <!-- Main title -->
        <div class="main-title">
            <h1>Brand-new Properties</h1>
        </div>
        <div class="row">
            <div v-for="(housedeal, index) in houseDeals" :key="`${index}_housedeal`"
                class="hidden-sm hidden-xs col-lg-4 col-md-4 col-sm-12">
                <div class="property-box property-clickable" @click="moveDetail(index)">
                    <div class="property-thumbnail">
                        <a href="#" class="property-img">
                            <div class="price-box"><span>{{housedeal.dealAmount}}만원</span></div>
                            <img class="d-block w-100" :src="getUrl(housedeal.img)" alt="properties" height="340"
                                width="288">
                        </a>
                    </div>
                    <div class="detail">
                        <h1 class="title" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
                            <router-link to="#">{{housedeal.aptName}}</router-link>
                        </h1>

                        <div class="location" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
                            <a href="#">
                                <i class="flaticon-pin"></i>{{housedeal.dong}}
                            </a>
                        </div>
                    </div>
                    <ul class="facilities-list clearfix">
                        <li>
                            <span>건축 연도</span>{{ housedeal.buildYear}}
                        </li>
                        <li>
                            <span>거래 연도</span>{{ housedeal.dealYear}}
                        </li>
                        <li>
                            <span>층수</span>{{ housedeal.floor}}
                        </li>
                        <li>
                            <span>지번</span>{{ housedeal.jibun}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "@/util/http-common";
    import store from "@/store/store.js";
    export default {
        data() {
            return {
                houseDeals: {},
                imgTitle: [],
            };
        },
        name: "FeaturedProperties",
        created: function () {
            console.log("hello");
            http
                .get("/housedeal/main")
                .then(({data}) => {
                    console.log(data);
                    this.houseDeals = data;
                })
                .catch(() => {
                    alert("최근 매물정보 조회에 실패했습니다.");
                });
        },
        methods: {
            getUrl(img) {
                if (!img) return '/img/house/unknown.png';
                return "/img/house/" + img;
            },
            moveDetail(index) {
                console.log('can move>>/house/detail/' + this.houseDeals[index].no);
                store.dispatch("saveRecentHouse", this.houseDeals[index]);
                this.$router.push('/house/detail?no=' + this.houseDeals[index].no + '&dong=' + this.houseDeals[index].dong);
            },
        }
    };
</script>

<style></style>