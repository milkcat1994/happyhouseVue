<template>

<!-- Contact section start -->
<div class="contact-section">
    <div class="container">
        <div class="row login-box">
            <div class="col-lg-6 align-self-center pad-0">
                <div class="form-section clearfix">
                    <h3>Create an account</h3>
                    <div class="btn-section clearfix">
                        <router-link to="/login" class="link-btn btn-1 default-bg">Login</router-link>
                        <router-link to="/signup" class="link-btn active btn-2 active-bg">Register</router-link>
                    </div>
                    <div class="clearfix"></div>
                        <div class="form-group form-box">
                            <input type="name" v-model="name" ref="name" name="name" class="input-text" placeholder="이름">
                        </div>
                        <div class="form-group form-box">
                            <input type="id" v-model="id" ref="id" name="id" class="input-text" placeholder="아이디">
                        </div>
                        <div class="form-group form-box">
                            <input type="password" v-model="pwd" ref="pwd" name="pwd" class="input-text" placeholder="비밀번호">
                        </div>
                        <div class="form-group form-box">
                            <input type="password" v-model="pwdchk" ref="pwdchk" name="pwdchk" class="input-text" placeholder="비밀번호 확인">
                            <!-- <p style="color:black;">맞아요</p> -->
                        </div>
                        <div class="form-group form-box">
                            <input type="email" v-model="email" ref="email" name="email" class="input-text" placeholder="xxx@google.com">
                        </div>
                        <div class="form-group form-box clearfix">
                            <input type="text" v-model="phone" ref="phone" name="phone" class="input-text" placeholder="010-1234-5678">
                        </div>
                        <div class="form-group clearfix mb-0">
                            <button @click="checkRegistrable" class="btn-md btn-theme float-left">Register</button>
                        </div>
                </div>
            </div>
            <!-- bg 475 X 717 px로 구해야함. -->
            <div id="singupImg" class="col-lg-6 bg-color-15 align-self-center pad-0 none-992 bg-img">
                <div class="info clearfix">
                    <div class="logo-2">
                        <router-link to="/">
                            <h4 style="color:white">HappyHouse</h4>
                            <!-- <img src="img/logos/logo.png" alt="logo"> -->
                        </router-link>
                    </div>
                    <h3>Welcome to HappyHouse</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Contact section end -->

</template>

<script>
import http from "@/util/http-common";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    data(){
        return {
                name: '',
                id: '',
                phone: '',
                email: '',
                pwd: '',
                pwdchk: '',
                auth: '',
        }
    },
    components: {
      MainHeader,
      MainFooter
    },
    methods: {
        checkRegistrable() {
            let err = true;
            let msg = "";
            !this.name &&
                ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
            err && !this.id &&
                ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
            err && !this.pwd &&
                ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.pwd.focus());
            err && (this.pwdchk != this.pwd || !this.pwdchk) &&
                ((msg = "비밀번호를 확인해주세요"), (err = false), this.$refs.pwdchk.focus());
            err && !this.email &&
                ((msg = "이메일을 입력해주세요"), (err = false), this.$refs.email.focus());
            err && !this.phone &&
                ((msg = "전화번호를 입력해주세요"), (err = false), this.$refs.phone.focus());

            if (!err) alertify.error(msg, 3);
            else this.regist();
        },
        regist() {
            let user = {};
            user.name = this.name;
            user.id = this.id;
            user.phone = this.phone;
            user.email = this.email;
            user.pwd = this.pwd;
            
            let msg = "회원가입중 오류가 발생하였습니다."
            http
                .post("/user", user)
                .then(({data}) => {
                    if (data === "success") {
                        msg = "회원가입이 되었습니다."
                        alertify.notify(msg, 'success', 3, function(){  console.log('회원가입 완료'); });
                        this.$router.push('/login');
                    }
                    else{
                        alertify.error(msg, 3, function(){  console.log('회원가입 실패'); });
                    }
                })
                .catch(() => {
                    alertify.error(msg, 3, function(){  console.log('회원가입 서버 통신 실패'); });
                });
        },
        setUserInfo(user) {
            this.name = user.name;
            this.id = user.id;
            this.phone = user.phone;
            this.email = user.email;
            this.pwd = user.pwd;
        }
    },
}
</script>

<style>
#singupImg {
  background-image: url("/img/img-3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>