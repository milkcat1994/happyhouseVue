<template>
  <div class="blog-body content-area-5">
    <notice-banner></notice-banner>
    <br />

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
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import NoticeBanner from "@/components/notice/NoticeBanner.vue";

export default {
  name: "noticelist",

  data() {
    return {};
  },

  components: {
    NoticeBanner,
  },
  computed: {
    //해당 페이지 정보에 따라 갱신해야함.
    ...mapGetters(["Notices"])
  },
  created() {
    store.dispatch("getNotices");
  },
  methods: {}
};
</script>

<style></style>
