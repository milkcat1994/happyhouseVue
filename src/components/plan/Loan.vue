<template>
  <div class="submit-address dashboard-list">
    <form method="GET">
      <h4 class="bg-grea-3"></h4>
      <div class="search-contents-sidebar">
        <div class="row pad-20">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>상환 방식</strong>
              </label>
              <v-app id="inspire">
                <v-select
                  :items="repaymentList"
                  v-model="repayment"
                  :menu-props="{ 'nudge-top':450, 'nudge-left':200 }"
                ></v-select>
              </v-app>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>대출 금액</strong> (원)
              </label>
              <input type="text" v-model.number="loanAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>연 이자율</strong> (%)
              </label>
              <input type="text" v-model.number="rate" class="input-text" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>상환기간</strong> (년)
              </label>
              <input type="text" v-model.number="period" class="input-text" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>거치기간</strong> (년)
              </label>
              <input type="text" v-model.number="delay" class="input-text" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group"></div>
          </div>

          <div class="row pad-20">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <a @click="resultShow = true" class="btn btn-md button-theme">결과 확인</a>
            </div>
          </div>
        </div>

        <div v-if="resultShow" class="dashboard-content">
          <div class="submit-address dashboard-list">
            <div class="row pad-20">
              <div class="col-lg-12">
                <div class="invoice">
                  <div class="row">
                    <div class="result">
                      <br />
                      <h2>
                        1억원을
                        10년(거치기간1년) 동안
                        원리금균등상환으로 대출을 받았을때
                        <br />연 이율 3.2%기준 매월
                        <strong>
                          <font color="#ff214f">106만 6876원</font>
                        </strong>씩 갚아야 합니다.
                        <br />
                        <br />
                        <br />
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <table class="table table-condensed">
                          <thead class="bg-active">
                            <tr>
                              <td>
                                <strong>회차</strong>
                              </td>
                              <td class="text-center">
                                <strong>이자</strong>
                              </td>
                              <td class="text-center">
                                <strong>원금</strong>
                              </td>
                              <td class="text-right">
                                <strong>내야하는 금액</strong>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1~12</td>
                              <td class="text-center">26만 6667원</td>
                              <td class="text-center">0원</td>
                              <td class="text-right">26만 6667원</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td class="text-center">26만 6667원</td>
                              <td class="text-center">80만 209원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>24</td>
                              <td class="text-center">24만 2878원</td>
                              <td class="text-center">82만 3998원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>36</td>
                              <td class="text-center">21만 6120원</td>
                              <td class="text-center">85만 756원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>48</td>
                              <td class="text-center">18만 8493원</td>
                              <td class="text-center">87만 8383원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>60</td>
                              <td class="text-center">15만 9969원</td>
                              <td class="text-center">90만 6907원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>72</td>
                              <td class="text-center">13만 519원</td>
                              <td class="text-center">93만 6357원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>84</td>
                              <td class="text-center">10만 112원</td>
                              <td class="text-center">96만 6764원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>96</td>
                              <td class="text-center">6만 8718원</td>
                              <td class="text-center">99만 8158원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>108</td>
                              <td class="text-center">3만 6304원</td>
                              <td class="text-center">103만 572원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td>120</td>
                              <td class="text-center">2837원</td>
                              <td class="text-center">106만 4039원</td>
                              <td class="text-right">106만 6876원</td>
                            </tr>
                            <tr>
                              <td class="no-line"></td>
                              <td class="no-line"></td>
                              <td class="no-line text-center">
                                <strong>Total</strong>
                              </td>
                              <td class="no-line text-right"><font color="#ff214f">총 이자액 1842만 2604원</font></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Goal",
  data() {
    return {
      repayment: "",
      repaymentList: ["만기일시상환", "원리금균등상환", "원금균등상환"],

      loanAmount: 100000000,
      rate: 3.2,
      period: 10,
      delay: 1,
      resultShow: false
    };
  }
};
</script>

<style>
#result {
  padding: 10px 100px 10px 100px;
}
</style>