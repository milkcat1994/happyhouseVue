<template>
  <div>
    <main-header />
    <notice-banner></notice-banner>
    <div class="blog-body content-area-5">

      <div class="container">
        <ul>
          <li v-for="(notice, index) in Notices" :key="`${index}_notice`">
            <div class="row">
              <div class="col-lg-12">
                <!-- Blog 1 start -->
                <div class="blog-1 blog-big">
                  <div class="detail">
                    <h3>
                      <a href="#">{{notice.title}}</a>
                    </h3>

                    <p>{{notice.content}}</p>
                    <br />

                    <div class="row clearfix">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="blog-tags">
                          <span>{{ '작성자 ' + notice.id }}</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="blog-social-list">
                          <span>{{'Date ' + notice.date.substring(0,10)}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Page navigation start -->
      <div class="pagination-box hidden-mb-45 text-center">
        <v-pagination v-model="NoticePageInfo.curPage" :length="NoticePageInfo.pageCnt" :total-visible="5"
          @input="next"></v-pagination>
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
  import store from "@/store/store.js";
  import {
    mapGetters
  } from "vuex";
  import NoticeBanner from "@/components/notice/NoticeBanner.vue";
  import {
    getDayDiff
  } from "@/util/day-common";

  import MainHeader from "@/components/MainHeader.vue";
  import MainFooter from "@/components/MainFooter.vue";
  export default {
    name: "noticelist",

    data() {
      return {};
    },

    components: {
      MainHeader,
      NoticeBanner,
      MainFooter
    },
    computed: {
      //해당 페이지 정보에 따라 갱신해야함.
      ...mapGetters(["NoticePageInfo"]),
      ...mapGetters(["Notices"])
    },
    created() {
      store.dispatch("getNoticePageInfo", 1);
      store.dispatch("getNotices", 1);

    },
    methods: {
      getDayDiff(curTime) {
        return getDayDiff(curTime);
      },
      next(page) {
        store.dispatch("getNotices", page);
      }
    },
    pdated() {
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