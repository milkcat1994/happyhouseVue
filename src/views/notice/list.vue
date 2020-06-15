<template>
  <div>
    <main-header />
    <sub-banner title="공지사항" />
    <div class="blog-body content-area-5">
      <!-- Option bar start -->

      <div class="container">
        <div v-if="uesrAuth == 'admin'" class="clearfix heading-properties-2">
          <router-link to="/notice/create" class="pull-right btn btn-md button-theme">공지사항 등록</router-link>
        </div>

        <ul>
          <li v-for="(notice, index) in Notices" :key="`${index}_notice`">
            <div class="row">
              <div class="col-lg-12">
                <!-- Blog 1 start -->
                <div class="blog-1 blog-big">
                  <div class="detail">
                    <h3>
                      <router-link :to="`/notice/read?no=` + notice.no">{{notice.title}}</router-link>
                    </h3>

                    <div class="row clearfix">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="blog-tags">
                          <span>{{ '작성자 ' + notice.id }}</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="blog-social-list">
                          <span>
                            <i class="flaticon-calendar"></i>
                            {{ getDayDiff(notice.date) }}
                          </span>
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
        <v-pagination
          v-model="NoticePageInfo.curPage"
          :length="NoticePageInfo.pageCnt"
          :total-visible="5"
          @input="next"
        ></v-pagination>
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import SubBanner from "@/components/SubBanner.vue";
import { getDayDiff } from "@/util/day-common";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "noticelist",

  data() {
    return {
      userId: this.$session.get("userId"),
      uesrAuth: this.$session.get("userAuth")
    };
  },
  components: {
    MainHeader,
    SubBanner,
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
    store.dispatch("getNotices", 1);
  },
  methods: {
    checkAdmin() {
      return uesrAuth == "admin" ? true : false;
    },
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
  }
};
</script>

<style>
.theme--light.v-pagination .v-pagination__item--active {
  background-color: #1867c0 !important;
}
</style>