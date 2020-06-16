<template>
  <div>
    <main-header />
    <sub-banner title="공지사항" />

    <div class="dashboard-content container">
      <div class="dashboard-header clearfix">
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <h4></h4>
          </div>
          <div class="col-sm-12 col-md-7">
            <div class="breadcrumb-nav">
              <ul>
                <router-link to="/notice/create" class="pull-right btn btn-md button-theme">공지사항 등록</router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-list">
        <table class="manage-table">
          <tbody>
            <tr
              v-for="(notice, index) in Notices"
              :key="`${index}_notice`"
              class="responsive-table notice-clickable"
              @click="moveDetail(notice.no)"
            >
              <td id="td0" />
              <td id="td1">
                <h6>
                  <a >{{notice.title}}</a>
                </h6>
              </td>
              <td id="td2">
                <h6>
                  <i class="fa fa-user-circle-o"></i>
                  {{ ' '+ notice.id }}
                </h6>
              </td>
              <td id="td3">
                <i class="flaticon-calendar"></i>
                {{ getDayDiff(notice.date) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
      moveScrollTop();
    },
    moveDetail(noticeNo){
      this.$router.push(`/notice/read?no=` + noticeNo);
      moveScrollTop();
    }
  }
};
</script>
<style>
.theme--light.v-pagination .v-pagination__item--active {
  background-color: #1867c0 !important;
}

#td0 {
  width: 200px;
}

#td1 {
  width: 700px;
}
#td2 {
  width: 150px;
}
#td3 {
  width: 150px;
}
.notice-clickable :hover {
    cursor: pointer;
}
</style>