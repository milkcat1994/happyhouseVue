<template>
  <div ref="listDisplay">
    <main-header />
    <sub-banner title="Q&A" />
    <!-- Properties section body start -->

    <div class="dashboard-content">

      <div class="clearfix heading-properties-2">
      <router-link to="/qna/create" class="pull-right btn btn-md button-theme">글쓰기</router-link>
    </div>


      <div class="dashboard-list">
        <table class="manage-table">
          <tbody>
            <tr v-for="(qna, index) in QnAs" :key="`${index}_qna`" class="responsive-table">
              <td id="td0" />
              <td id="td1">
                <h6>
                  <router-link :to="`/qna/read?no=` + qna.qnaNo">{{qna.qnaTitle}}</router-link>
                </h6>
              </td>
              <td id="td2">
                <h6>
                  <i class="fa fa-user-circle-o"></i>
                  {{ ' '+ qna.qnaUserid }}
                </h6>
              </td>
              <td id="td3">
                <i class="flaticon-calendar"></i>
                {{ getDayDiff(qna.qnaDatetime) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

            <!-- Page navigation start -->
            <div class="pagination-box hidden-mb-45 text-center">
              <v-pagination
                v-model="QnAPageInfo.curPage"
                :length="QnAPageInfo.pageCnt"
                :total-visible="10"
                @input="next"
              ></v-pagination>
            </div>

            <main-footer />
          </div>
    <!-- Properties section body end -->
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import SubBanner from "@/components/SubBanner.vue";
import { getDayDiff } from "@/util/day-common";
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
    ...mapGetters(["QnAs"])
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
  }
};
</script>

<style>
/* @import url("https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"); */
/* src="vuetify/dist/vuetify.min.css" */
</style>