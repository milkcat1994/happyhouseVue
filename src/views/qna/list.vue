<template>
<div>
    <sub-banner />
<!-- Properties section body start -->
<div class="properties-section-body content-area">
    <div class="container">
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <!-- Option bar start -->
                <router-link to="/qna/register" class="btn btn-md button-theme">글쓰기</router-link>
                <!-- Property box 2 start -->
                <div class="property-box-2" v-for="(qna, index) in QnAs" :key="`${index}_qna`">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-pad">
                            <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">{{qna.qnaTitle}}</a>
                                    </h3>
                                </div>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="flaticon-male"></i>{{qna.qnaUserid}}
                                    </a>
                                    <span>
                                          <i class="flaticon-calendar"></i>{{getday(qna.qnaDatetime)}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Page navigation start -->
                <div class="pagination-box hidden-mb-45 text-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <!-- 페이지 정보 받아서 li 구성하기 -->
                            <li class="page-item">
                                <a class="page-link" href="#">Prev</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="properties-list-rightside.html">11</a></li>
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
                </div>
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
import moment from 'moment';
// import Pagination from "@/components/qna/Pagination.vue";

export default {
  name: "qnalist",
  components: {
    ListRow,
    SubBanner,
    // Pagination
  },
  computed: {
    //해당 페이지 정보에 따라 갱신해야함.
    ...mapGetters(["QnAs"]),
    
  },
  created() {
    store.dispatch("getQnAs");
  },
  methods: {
    movePage() {
      this.$router.push("/qna/create");
    },
    getday(qnaTime){
        return moment(qnaTime,"YY-MM-DD").startOf('day').fromNow();
    }
  },
  
};
</script>

<style></style>
