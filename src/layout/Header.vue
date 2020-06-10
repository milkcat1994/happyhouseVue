<template>
  <!-- Masthead -->
  <header class="masthead">
    <div class="container h-100">
      <div
        class="row h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-10 align-self-end">
          <a class="nav-link js-scroll-trigger" href="/">
            <h1 class="text-uppercase text-white font-weight-bold">
              Happy House
            </h1>
          </a>
          <hr class="divider my-4" />
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white-75 font-weight-light mb-5">
            양지용과 윤창희의 프로젝트입니다
          </p>
        </div>
      </div>
    </div>

    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">관통프로젝트</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto my-2 my-lg-0">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/housedeal/list"
                >거래정보 확인</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="favoritearea"
                >관심지역 확인</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/user/favoriteform"
                >관심지역 설정하기</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/notice">공지사항</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/qna/list"
                >QnA 게시판</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/">MyPage</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger">Logout</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
header.masthead {
  background: linear-gradient(
      to bottom,
      rgba(92, 77, 66, 0.8) 0%,
      rgba(92, 77, 66, 0.8) 100%
    ),
    url("../assets/img/user/city1.jpg");
}
</style>
