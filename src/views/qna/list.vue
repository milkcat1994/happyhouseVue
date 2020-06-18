<template>
  <div ref="listDisplay">
    <main-header />
    <sub-banner title="Q&A" />
    <!-- Properties section body start -->

    <div class="dashboard-content container">

      <div class="clearfix heading-properties-2">
      <router-link to="/qna/create" class="pull-right btn btn-md button-theme">글쓰기</router-link>
    </div>


      <div class="dashboard-list">
        <table class="manage-table">
          <tbody>
            <tr v-for="(qna, index) in QnAs" :key="`${index}_qna`" @click="moveDetail(qna.qnaNo)" class="responsive-table qna-clickable">
              <td id="td0" />
              <td id="td1">
                <h6>
                  <a>{{qna.qnaTitle}}</a>
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
                :total-visible="QnAPageInfo.pageSize"
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
import { moveScrollTop } from "@/util/scroll-common";

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
      moveScrollTop();
    },
    moveDetail(qnaNo){
      this.$router.push(`/qna/read?no=` + qnaNo);
      moveScrollTop();
    }
  }
};
</script>

<style>
    .qna-clickable :hover {
        cursor: pointer;
    }
</style>