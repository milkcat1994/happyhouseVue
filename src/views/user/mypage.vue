<template>
    <div>
        <main-header />
        <sub-banner title="MY PAGE"/>
    <!-- Dashbord start -->
        <div class="dashboard">
            <div class="container-fluid">
                <div class="row">
                    <div class="dashboard-content">
                        <div class="dashboard-header clearfix">
                            <div class="row">
                                <div class="col-sm-12 col-md-5">
                                    <h4>내 정보</h4>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-list">
                            <h3 class="heading">개인정보 수정</h3>
                            <div class="dashboard-message contact-2 bdr clearfix">
                                <div class="row">
                                    <div >
                                        <!-- Edit profile photo -->
                                        <div class="edit-profile-photo" >
                                            <img :src="getUrl(null)"  style="width:233px;height:233px;" alt="profile-photo">
                                        </div>
                                    </div>
                                    <div class="col-lg col-md">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label>아이디</label>
                                                    <input readonly :value="id" type="text" name="id" class="form-control" placeholder="ID">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group name">
                                                    <label>이름</label>
                                                    <input type="text" v-model="name" ref="name" name="name" class="form-control"
                                                        placeholder="이름">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group phone">
                                                    <label>전화번호</label>
                                                    <input type="text" v-model="phone" ref="phone" name="phone" class="form-control"
                                                        placeholder="전화번호">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group email">
                                                    <label>이메일</label>
                                                    <input type="email" v-model="email" ref="email" name="email"
                                                        class="form-control" placeholder="xxx@google.com">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label>비밀번호</label>
                                                    <input type="password" v-model="pwd" ref="pwd" name="pwd"
                                                        class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label>비밀번호재입력</label>
                                                    <input type="password" v-model="pwdchk" ref="pwdchk" name="pwdchk"
                                                        class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="form-group">
                                                    <label>권한</label>
                                                    <input readonly :value="auth" class="form-control" name="message"
                                                        placeholder="권한">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix heading-properties-2">
                                    <button class="pull-right btn btn-lg btn-danger" @click="userDelete">
                                        탈퇴하기
                                    </button>
                                    <button class="pull-right btn btn-lg btn-warning" @click="checkUpdatable">
                                        수정하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dashbord end -->
        <main-footer />
    </div>
</template>

<script>
import http from "@/util/http-common";
    import SubBanner from "@/components/SubBanner.vue";
    import MainHeader from "@/components/MainHeader.vue";
    import MainFooter from "@/components/MainFooter.vue";
    import store from "@/store/store.js";
    export default {
        name: "mypage",
        components: {
            MainHeader,
            SubBanner,
            MainFooter
        },
        data() {
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
        methods: {
            checkUpdatable() {
                let err = true;
                let msg = "";
                !this.name &&
                    ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
                err && !this.phone &&
                    ((msg = "전화번호를 입력해주세요"), (err = false), this.$refs.phone.focus());
                err && !this.email &&
                    ((msg = "이메일을 입력해주세요"), (err = false), this.$refs.email.focus());
                err && !this.pwd &&
                    ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.pwd.focus());
                err && !this.pwdchk &&
                    ((msg = "비밀번호를 확인해주세요"), (err = false), this.$refs.pwdchk.focus());

                if (!err) alertify.error(msg, 3);
                else this.updateProfile();
            },
            updateProfile() {
                let user = {};
                user.name = this.name;
                user.id = this.id;
                user.phone = this.phone;
                user.email = this.email;
                user.pwd = this.pwd;
                
                let msg = "정보 수정중 오류가 발생하였습니다."
                http
                    .put("/user/" + this.$session.get('userId'), user)
                    .then(({data}) => {
                        if (data === "success") {
                            msg = "정보가 수정 되었습니다."
                            alertify.notify(msg, 'success', 3, function(){  console.log('user수정 완료'); });
                        }
                        else{
                            alertify.error(msg, 3, function(){  console.log('user수정 실패'); });
                        }
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function(){  console.log('user수정 서버 통신 실패'); });
                    });
            },
            setUserInfo(user) {
                this.name = user.name;
                this.id = user.id;
                this.phone = user.phone;
                this.email = user.email;
                this.pwd = user.pwd;
            },
            userDelete(){
                let tid = this.$session.get('userId');
                let msg = '회원탈퇴 실패';
                let vue = this;
                alertify.confirm('회원 탈퇴', '탈퇴 하시겠습니까?',
                function(){
                    http
                    .delete('user/'+ tid)
                    .then(({data}) => {
                        if (data === "success") {
                            msg = "탈퇴가 완료되었습니다."
                            alertify.notify(msg, 'success', 3, function(){  console.log('회원탈퇴 완료'); });
                            vue.logout();
                        }
                        else{
                            alertify.error(msg, 3, function(){  console.log('회원탈퇴 실패'); });
                        }
                    })
                    .catch(() => {
                        msg = '회원탈퇴 서버 통신 실패';
                        alertify.error(msg, 3, function(){  console.log('회원탈퇴 서버 통신 실패'); });
                    });
                },
                function(){ alertify.error('취소되었습니다.')});
            },
            logout() {
                this.$session.destroy();
                this.$router.push('/');
            },
            getUrl(img) {
                if (!img) return '/img/unknownImg.jpg';
                return "/img/area/" + img;
            },
        },
        created() {
            console.log()
            store.dispatch("auth/getUserInfo", this.$session.get('userId'))
                .then((response) => {
                    this.setUserInfo(response.data);
                })
                .catch((error) =>{
                    this.$router.push('/');
                })
        }
    }
</script>

<style>

</style>