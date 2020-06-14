<template>
  <div ref='listDisplay'>
    <main-header />
    <sub-banner />
    <!-- Properties section body start -->
    <div class="properties-section-body content-area">
      <div class="container">
        <div class="row">
          <div class="offset-lg-1 col-lg-10">
            <!-- Option bar start -->
            <div class="clearfix heading-properties-2">
              <router-link to="/qna/create" class="pull-right btn btn-md button-theme">글쓰기</router-link>
            </div>
            <!-- Property box 2 start -->
            <div class="property-box-2" v-for="(qna, index) in QnAs" :key="`${index}_qna`">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-pad">
                  <div class="detail">
                    <div class="hdg">
                      <h3 class="title">
                        <router-link :to="`/qna/read?no=` + qna.qnaNo">
                        {{qna.qnaTitle}}
                        </router-link>
                      </h3>
                    </div>
                    <div class="footer">
                      <a href="#" tabindex="0">
                        <i class="flaticon-male"></i>{{ qna.qnaUserid }}
                      </a>
                      <span>
                        <i class="flaticon-calendar"></i>{{ getDayDiff(qna.qnaDatetime) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Page navigation start -->
            <div class="pagination-box hidden-mb-45 text-center">
              <v-pagination v-model="QnAPageInfo.curPage" :length="QnAPageInfo.pageCnt" :total-visible="10"
                @input="next"></v-pagination>
            </div>
            <!-- <div class="pagination-box hidden-mb-45 text-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            
                            <li v-if="QnAPageInfo.curRange != 1" li class="page-item">
                                <router-link class="page-link" href="#">처음</router-link>
                            </li>
                            <li v-if="QnAPageInfo.curPage > 10" class="page-item">
                                <router-link class="page-link" href="#">Prev</router-link>
                            </li>

                            <li  class="page-item">
                                <a class="page-link" href="properties-list-rightside.html">11</a>
                                </li>
                            <li class="page-item"><a class="page-link" href="properties-list-leftsidebar.html">12</a></li>
                            <li class="page-item"><a class="page-link active" href="properties-list-fullwidth.html">13</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-rightside.html">14</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-leftsidebar.html">15</a></li>
                            <li class="page-item"><a class="page-link active" href="properties-list-fullwidth.html">16</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-rightside.html">17</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-leftsidebar.html">18</a></li>
                            <li class="page-item"><a class="page-link active" href="properties-list-fullwidth.html">19</a></li>
                            <li class="page-item"><a class="page-link active" href="properties-list-fullwidth.html">20</a></li>
                            <li class="page-item">
                                <a class="page-link" href="properties-list-rightside.html">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Properties section body end -->
    <main-footer />
  </div>
</template>

<script>
  import store from "@/store/store.js";
  import {
    mapGetters
  } from "vuex";
  import SubBanner from "@/components/qna/SubBanner.vue";
  import {
    getDayDiff
  } from "@/util/day-common";
  // import Pagination from "@/components/qna/Pagination.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
  export default {
    name: "qnalist",
    components: {
      MainHeader,
      SubBanner,
      MainFooter
    },
    computed: {
      //   QnAPageInfo.curPage
      //해당 페이지 정보에 따라 갱신해야함.
      ...mapGetters(["QnAPageInfo"]),
      ...mapGetters(["QnAs"]),
    },
    created() {
      store.dispatch("getQnAPageInfo", 1);
      store.dispatch("getQnAs", 1);
    },
    methods: {
      getDayDiff(curTime) {
        return getDayDiff(curTime);
      },
      next(page) {
        store.dispatch("getQnAs", page);
      }
    },
    updated() {
      //페이지 이동시 가장 상단으로 이동
      let display = this.$refs.listDisplay;
      display.scrollTop = 0;
      //   display.scrollHeight;
    },
  };
</script>

<style>
  .theme--light.v-pagination .v-pagination__item--active {
    background-color: #1867c0 !important;
  }
</style>