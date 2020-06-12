<template>
<div>
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
                                        <router-link :to="`/qna/read/?no=`+qna.qnaNo">{{qna.qnaTitle}}</router-link>
                                    </h3>
                                </div>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="flaticon-male"></i>{{qna.qnaUserid}}
                                    </a>
                                    <span>
                                          <i class="flaticon-calendar"></i>{{getDayDiff(qna.qnaDatetime)}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Page navigation start -->
                <div class="pagination-box hidden-mb-45 text-center">
                <v-pagination v-model="QnAPageInfo.curPage" :length="QnAPageInfo.pageCnt"></v-pagination>
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
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import ListRow from "@/components/qna/Row.vue";
import SubBanner from "@/components/qna/SubBanner.vue";
import { getDayDiff } from "@/util/day-common";
// import Pagination from "@/components/qna/Pagination.vue";

export default {
    data(){
        return{
            pagination: {},
        }
    },
  name: "qnalist",
  components: {
    ListRow,
    SubBanner,
    // Pagination
  },
  computed: {
    //해당 페이지 정보에 따라 갱신해야함.
    ...mapGetters(["QnAs"]),
    ...mapGetters(["QnAPageInfo"]),
  },
  created() {
    store.dispatch("getQnAs");
    store.dispatch("getQnAPageInfo", this.QnAPageInfo.curPage);
  },
  methods: {
    movePage() {
      this.$router.push("/qna/create", this.QnAPageInfo);
    },
    getDayDiff(curTime){
        return getDayDiff(curTime);
    }
  },
  
};
</script>

<style></style>
