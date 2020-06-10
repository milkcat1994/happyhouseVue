<template>
  <section class="page-section" id="services">
    <div class="container">
      <h2 class="text-center mt-0">At Your Service</h2>
      <hr class="divider my-4" />
      <div class="row">
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          height="100%"
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="800"
                  height="400"
                >
                  <tbody>
                    <tr>
                      <td align="center">
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="800"
                          height="350"
                        >
                          <tbody>
                            <tr>
                              <td width="107" align="center">
                                <img
                                  src="@/assets/img/login.png"
                                  border="0"
                                  width="150dp"
                                />
                              </td>
                              <td width="70%" align="center">
                                <form
                                  method="post"
                                  id="loginform"
                                  name="loginform"
                                  action=""
                                >
                                  <center><h4>LOGIN</h4></center>
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="2"
                                    align="center"
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="@/assets/img/user/id_id.gif"
                                            border="0"
                                            alt=""
                                            width="100dp"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            v-model="userId"
                                            id="userID"
                                            type="text"
                                            name="user"
                                            class="input"
                                            tabindex="1"
                                            onkeypress="if (event.keyCode == 13) Login();"
                                            style="width:400px;height:50px;"
                                          />
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>&nbsp;</td>
                                      </tr>

                                      <tr>
                                        <td>
                                          <img
                                            src="@/assets/img/user/id_pass.gif"
                                            border="0"
                                            alt=""
                                            width="100dp"
                                          />
                                        </td>
                                        <td>
                                          <input
                                            v-model="pwd"
                                            id="userPassword"
                                            type="password"
                                            name="pass"
                                            class="input"
                                            tabindex="2"
                                            onkeypress="if (event.keyCode == 13) Login();"
                                            style="width:400px;height:50px;"
                                          />
                                        </td>
                                      </tr>
                                      <tr></tr>
                                      <tr>
                                        <td></td>
                                      </tr>
                                      <tr></tr>
                                      <tr>
                                        <td></td>
                                        <td>
                                          <div
                                            class="col-lg-8 align-self-baseline"
                                            style="display:inline "
                                          >
                                            <p>
                                              &emsp;
                                              <a
                                                class="btn btn-primary btn-xl js-scroll-trigger"
                                                @click="goLogin()"
                                                >SIGN</a
                                              >
                                              &emsp;
                                              <a
                                                class="btn btn-secondary btn-xl js-scroll-trigger"
                                                href="/user/registerForm"
                                                >JOIN</a
                                              >
                                              &emsp;
                                              <a
                                                class="btn btn-warning btn-xl js-scroll-trigger"
                                                href="/user/findpwdForm"
                                                >FIND</a
                                              >
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </form>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: "LoginForm",
  data() {
    return {
      userId: "",
      pwd: ""
    };
  },
  methods: {
    goLogin() {
      store.dispatch("login", { userId: this.userId, pwd: this.pwd, url: "/" });

      // 오류 코드
      // store 의 commit 발생 전에 router.push 먼저 수행됨 (router 이동 후 store 변경됨)
      // store.dispatch('login', { userId: this.userId, pwd: this.pwd })
      // console.log(10)
      // router.push('/About')
      // console.log(11)
    }
  }
};
</script>
