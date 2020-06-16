<template>

    <!-- Contact section start -->
    <div class="contact-section">
        <div class="container">
            <div class="row login-box">
                <div class="col-lg-6 align-self-center pad-0">
                    <div class="form-section clearfix">
                        <h3>비밀번호 찾기</h3>
                        <div class="clearfix"></div>
                        <div class="form-group form-box clearfix">
                            <input v-model="userId" type="text" name="text" class="input-text" placeholder="아이디" @keyup.enter="findPwd">
                        </div>
                        <div class="form-group form-box clearfix">
                            <input v-model="email" type="email" name="email" class="input-text" placeholder="등록된 이메일" @keyup.enter="findPwd">
                        </div>
                        <div class="form-group clearfix mb-0">
                            <button type="submit" class="btn-md btn-theme btn-block" @click="findPwd">비밀번호 찾기</button>
                        </div>
                    </div>
                </div>
                <div id="forgotPwdImg" class="col-lg-6 bg-color-15 align-self-center pad-0 none-992 bg-img">
                    <div class="info clearfix">
                        <div class="logo-2">
                            <router-link to="/">
                                <h4 style="color:white">HappyHouse</h4>
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
    export default {
        data() {
            return {
                userId: '',
                email: ''
            }
        },
        methods: {
            findPwd() {
                let msg = "비밀번호를 찾을 수 없습니다.";
                http
                    .post("/user/findpwd", {
                        'id': this.userId,
                        'email': this.email
                    })
                    .then(({ data }) => {
                        if (data != "") {
                            alertify.alert('비밀번호', data);
                            this.$router.push("/login");
                        }
                    })
                    .catch(() => {
                        alertify.error(msg), 3,
                            function () {
                                console.log(msg);
                            };
                    })
            }
        }
    }
</script>

<style>
    #forgotPwdImg {
        background-image: url("/img/login.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>