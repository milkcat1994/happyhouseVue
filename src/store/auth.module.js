import http from "@/util/http-common";

export const auth = {
    namespaced: true,
    state: {
        isLogin: false,
        userInfo: {},
        userToken: '',
    },
    getters: {
        isLogin(state) {
            return state.isLogin;
        },
        userInfo(state) {
            return state.userInfo;
        }
    },
    mutations: {
        mutateIsLogin(state, isLogin) {
            state.isLogin = isLogin;
        },
        mutateUserInfo(state, userInfo) {
            state.userInfo = { "userId": userInfo.id, "userAuth": userInfo.auth };
        },
        mutateUserToken(state, userToken) {
            state.userToken = userToken;
        },
        mutateRegister(state) {
            state.isLogin = false;
        },
    },
    actions: {
        login(context, { userId, pwd, url }) {
            return new Promise((resolve, reject) => {
                http
                    .post("/user/login", {
                        id: userId,
                        pwd: pwd
                    })
                    .then(({ data }) => {
                        context.commit("mutateIsLogin", true);
                        let token = Math.random().toString(36).substring(2);
                        context.commit("mutateUserToken", token);
                        context.commit("mutateUserInfo", data);

                        resolve({ data })
                    })
                    .catch((error) => {
                        if (error.response) {
                            if (error.response.status == "404") {
                                alertify.error("아이디 또는 비밀번호가 올바르지 않습니다.", 3);
                            } else {
                                alertify.error("로그인 처리시 에러가 발생했습니다.", 3);
                            }
                        }
                        return reject();
                    });
            });
        },
        logout(context) {
            return new Promise((resolve, reject) => {
                http
                    .get("/user/logout")
                    .then(data => {
                        context.commit("mutateIsLogin", false);
                        context.commit("mutateUserToken", '');
                        context.commit("mutateUserInfo", {});
                        // delete localStorage.token;
                        // delete localStorage.userInfo;
                        resolve()
                    })
                    .catch(error => {
                        alertify.error("로그아웃 처리시 에러가 발생했습니다.", 3,
                            function() { console.log(error.config); });
                        return reject();
                    });
            });
        },
        setUserInfo(context) {
            context.commit("mutateIsLogin", localStorage.isLogin);
            context.commit("mutateUserToken", localStorage.userToken);
            context.commit("mutateUserInfo", localStorage.userInfo);
        },
        getUserInfo(context, userid) {
            return new Promise((resolve, reject) => {
                http
                    .get("/user/" + userid)
                    .then(({ data }) => {
                        resolve({ data })
                    })
                    .catch(() => {
                        alertify.error("유저정보가 없습니다.", 3,
                            function() { console.log("유저정보가 없습니다."); });
                        return reject();
                    });
            });
        },
    },
}