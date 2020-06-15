<template>
  <!-- Contact section start -->
  <div class="contact-section">
    <div class="container">
      <div class="row login-box">
        <div class="col-lg-6 align-self-center pad-0">
          <div class="form-section align-self-center">
            <h3>Sign into your account</h3>
            <div class="btn-section clearfix">
              <router-link to="/login" class="link-btn active btn-1 active-bg">Login</router-link>
              <router-link to="/signup" class="link-btn btn-2 default-bg">Register</router-link>
            </div>
            <div class="clearfix"></div>
            <!-- <form action="#" method="GET"> -->
            <div class="form-group form-box">
              <input
                type="text"
                name="text"
                class="input-text"
                placeholder="ID"
                v-model="userId"
                @keyup.enter="login"
              />
            </div>
            <div class="form-group form-box clearfix">
              <input
                type="password"
                name="Password"
                class="input-text"
                placeholder="Password"
                v-model="userPwd"
                @keyup.enter="login"
              />
            </div>
            <div class="form-group clearfix mb-0">
              <button type="submit" class="btn-md btn-theme float-left" @click="login">Login</button>
              <a href="#" class="forgot-password">Forgot Password</a>
            </div>
            <!-- </form> -->
          </div>
        </div>
        <div id="loginImg" class="col-lg-6 bg-color-15 align-self-center pad-0 none-992 bg-img">
          <div class="info clearfix">
            <div class="logo-2">
              <router-link to="/">
                <h4 style="color:white">HappyHouse</h4>
                <!-- <img src="img/logos/logo.png" alt="logo"> -->
              </router-link>
            </div>
            <h3>Welcome to HappyHouse</h3>
            <!-- <div class="social-list">
                        <a href="#" class="facebook-bg">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" class="twitter-bg">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="google-bg">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="#" class="linkedin-bg">
                            <i class="fa fa-linkedin"></i>
                        </a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact section end -->
</template>

<script>
import store from "@/store/store.js";

export default {
  data() {
    return {
      userId: "",
      userPwd: ""
    };
  },
  methods: {
    login() {
      store
        .dispatch("auth/login", { userId: this.userId, pwd: this.userPwd })
        .then(response => {
          // console.log(response);
          // console.log(response.data.id);
          this.$session.start();
          this.$session.set("userId", response.data.id);
          this.$session.set("userAuth", response.data.auth);
          console.log(this.$route.query.redirect);
          if (this.$route.query.redirect == undefined)
            // this.$router.push('/');
            window.location.href = "/";
          else this.$router.replace(this.$route.query.redirect || "/");
        });
      //인증에 성공하면 이전 페이지로 이동
    }
  }
};
</script>

<style>
#loginImg {
  background-image: url("/img/login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>