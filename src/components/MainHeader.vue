<template>
  <!-- Main header start -->
  <header class="main-header header-transparent sticky-header">
    <!-- Top header start -->
    <div class="top-header top-header-bg" id="top-header-2">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="list-inline">
              <a v-if="isLogin" href="">
                <i class="fa fa-user-circle"></i>{{ userId }}
              </a>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ul class="top-social-media pull-right">
              <li>
                <a href="#" @click.prevent="logout" v-if="isLogin" class="sign-in">
                  <i class="fa fa-sign-in"></i> 로그아웃
                </a>
                <router-link to="/login" v-else class="sign-in">
                  <i class="fa fa-sign-in"></i> 로그인
                </router-link>
              </li>
              <li v-if="!isLogin" >
                <router-link to="/signup" class="sign-in">
                  <i class="flaticon-male"></i> 회원가입
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Top header end -->
    </div>

      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand logo" to="/">
            HAPPY HOUSE
            <!-- <img src="img/logos/black-logo.png" alt="logo"> -->
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="/">메인</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/deal"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >거래 정보</a>
              </li>
              <li class="nav-item dropdown">
                <router-link
                  class="nav-link dropdown-toggle"
                  to="/notice"
                  id="navbarDropdownMenuLink6"
                >공지사항</router-link>
              </li>

              <li class="nav-item dropdown megamenu-li">
                <router-link class="nav-link dropdown-toggle" to="/qna" id="dropdown01">Q&A</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >MyPage</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <router-link class="dropdown-item" to="/mypage">내 정보</router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/favarea">관심정보</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  </header>
  <!-- Main header end -->
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store/store.js";
export default {
  data() {
    return {
      isLogin: false,
      userId: ""
    };
  },
  computed: {
    userAuth() {
      // console.log('cchange userAuth ' + this.$session.get('userAuth'));
      return this.$session.get("userAuth");
    }
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.isLogin = false;
      this.$router.push('/');
    }
  },
  created() {
    if (this.$session.get("userId")) {
      // console.log('success ' + this.$session.get('userId'));
      this.isLogin = true;
      this.userId = this.$session.get("userId");
    } else {
      // console.log('fail ' + this.$session.get('userId'));
      this.isLogin = false;
    }
  }
};
</script>
<style>
</style>