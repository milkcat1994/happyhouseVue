<template>
  <!-- Featured Properties start -->
<div class="featured-properties content-area-12">
    <div class="container">
        <!-- Main title -->
        <div class="main-title">
            <h1>Brand-new Properties</h1>
        </div>
        <!-- Slick slider area start -->
        <div class="slick-slider-area">
            <div class="row slick-carousel" data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'>
                <div  v-for="(housedeal, index) in houseDeals" :key="`${index}_housedeal`" class="slick-slide-item">
                    <div class="property-box">
                        <div class="property-thumbnail">
                            <a href="properties-details.html" class="property-img">
                                <div class="tag"></div>
                                <div class="price-box"><span>{{ housedeal.dealAmount}}￦</span></div>
                                <img class="d-block w-100" :src="getUrl(housedeal)" alt="properties" height="233" width="350">
                            </a>
                        </div>
                        <div class="detail">
                            <h1 class="title">
                                <a href="properties-details.html">{{ housedeal.aptName}}</a>
                            </h1>

                            <div class="location">
                                <a href="properties-details.html">
                                    <i class="flaticon-pin"></i>{{ housedeal.dong}}
                                </a>
                            </div>
                        </div>
                        <ul class="facilities-list clearfix">
                            <li>
                                <span>건축 연도</span>{{ housedeal.buildYear}}
                            </li>
                            <li>
                                <span>면적</span>{{ housedeal.area}}
                            </li>
                            <li>
                                <span>층수</span>{{ housedeal.floor}}
                            </li>
                            <li>
                                <span>지번</span>{{ housedeal.jibun}}
                            </li>
                            <li>
                                <span>코드</span>{{ housedeal.code}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Featured Properties end -->
</template>

<script>
import http from "@/util/http-common";

export default {
  data() {
    return {
      houseDeals: {},
      imgTitle: [],
    };
  },
  name: "FeaturedProperties",
  created: function() {
    console.log("hello");
    http
      .get("/housedeal/main")
      .then(({ data }) => {
        console.log(data);
        this.houseDeals = data;
      })
      .catch(() => {
        alert("최근 매물정보 조회에 실패했습니다.");
      });
  },
  methods : {
    getUrl (housedeal) {
      return "/img/house/" + housedeal.aptName + ".jfif"
    }
  }
};
</script>

<style></style>
