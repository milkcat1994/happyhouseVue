<template>
  <div>
    <main-header />
    <sub-banner title="PLAN" />

    <!-- Dashbord start -->
    <div class="dashboard">
      <div class="container-fluid">
        <div class="row">
    
          <div class="dashboard-content">
            <div class="dashboard-header clearfix">
              <div class="row">
                <div class="col-sm-12 col-md-5">
                </div>
                <div class="col-sm-12 col-md-7">
                  <div class="breadcrumb-nav">
                    <ul>
                      <li :class="{active : priceShow}" @click="priceShow = !priceShow" >내게 맞는 집 가격 알아보기</li>
                      <li :class="{active : loanShow}" @click="loanShow = !loanShow" >대출 이자 계산기</li>
                      <li :class="{active : goalShow}" @click="goalShow = !goalShow" >목돈 모으기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <goal v-if="goalShow" />
            
          </div>
        </div>
      </div>
    </div>
    <!-- Dashbord end -->

    <main-footer />
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import SubBanner from "@/components/SubBanner.vue";
import { getDayDiff } from "@/util/day-common";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import Goal from "@/components/plan/Goal.vue";

export default {
  name: "plan",

  data() {
    return {
        priceShow : false,
        loanShow : false,
        goalShow : true
    };
  },
  components: {
    MainHeader,
    SubBanner,
    MainFooter,
    Goal
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
</style>