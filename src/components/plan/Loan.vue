<template>
  <div class="submit-address dashboard-list">
    <form>
      <h4 class="bg-grea-3"></h4>
      <div class="search-contents-sidebar">
        <div class="row pad-20">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>상환 방식</strong>
              </label>
              <v-app id="inspire">
                <v-select :items="repaymentList" v-model="repayment"
                  :menu-props="{ 'nudge-top':450, 'nudge-left':200 }"></v-select>
              </v-app>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>대출 금액</strong> (원)
              </label>
              <input type="number" v-model.number="loanAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>연 이자율</strong> (%)
              </label>
              <input type="number" v-model.number="rate" class="input-text" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>상환기간</strong> (년)
              </label>
              <input type="number" v-model.number="period" class="input-text" />
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group"></div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group"></div>
          </div>

          <div class="row pad-20">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <a @click.prevent="setObj" class="btn btn-md button-theme">결과 확인</a>
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
                        {{changeString(loanAmount)}}억원을
                        {{period}}년 동안
                        원리금균등상환으로 대출을 받았을때
                        <br />연 이율 {{rate}}%기준 매월
                        <strong>
                          <font color="#ff214f">{{changeString(p)}}원</font>
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
                            <tr v-for="(res, index) in resultArr" :key="index">
                              <td>{{index+1}}</td>
                              <td class="text-center">{{changeString(resultArr[index].r)}}원</td>
                              <td class="text-center">{{changeString(resultArr[index].o)}}원</td>
                              <td class="text-right">{{changeString(resultArr[index].p)}}원</td>
                            </tr>

                            <tr>
                              <td class="no-line"></td>
                              <td class="no-line"></td>
                              <td class="no-line text-center">
                                <strong>Total</strong>
                              </td>
                              <td class="no-line text-right">
                                <font color="#ff214f">총 이자액 {{changeString(totalr)}}원</font>
                              </td>
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
  import {
    numberWithCommas
  } from "@/util/util-common"
  export default {
    name: "Goal",
    data() {
      return {
        repayment: "",
        repaymentList: ["원리금균등상환",
        // "만기일시상환",  "원금균등상환"
        ],



        loanAmount: 100000000,
        rate: 3,
        period: 1,
        resultShow: false,

//상환금액
        p:0,

        resultArr: [],
        //총 이자액
        totalr:0,

      };
    },
    watch:{
      loanAmount(){
        this.resultShow = false;
      },
      period(){
        this.resultShow = false;
      },
      rate(){
        this.resultShow = false;
      }
    },
    methods: {
      setObj() {
        let pRate = this.rate / 100; //이자율
        let per = this.period * 12;
        if (this.repayment == '원리금균등상환') {
          this.totalr = 0;

          this.p=Math.round((this.loanAmount * pRate / 12) * ((Math.pow(1 + pRate / 12, per)) / ((Math.pow(1 + pRate /
            12, per)) - 1)), 1);

          //매달 상환 금액
          let p = this.p;
          let n = this.loanAmount; //잔액

          for (let i = 1; i <= per; ++i) {
            // if()
            let obj = new Object();
            //이자, 원금, 낼금액
            //r, o, p(고정)
            obj.p = p;
            obj.r = Math.round(this.getRate(n, pRate),1);
            if(obj.r <0) obj.r = 0;
            this.totalr += obj.r;
            n = n - p;
            obj.o = Math.round(this.getOrigin(p, obj.r),1);

            this.resultArr.push(obj);
          }
          console.dir(this.resultArr);
        }

        this.resultShow = true
      },
      //이자 구하기
      //잔액과 이자율로 구하기
      getRate(e, r) {
        return e * r / 12;
      },
      //원금구하기
      //월불입금 - 이자
      getOrigin(p, r) {
        return p - r;
      },
      changeString(v) {
        return numberWithCommas(v);
      }
    }
  };
</script>

<style>
  #result {
    padding: 10px 100px 10px 100px;
  }
</style>