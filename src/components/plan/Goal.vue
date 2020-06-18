<template>
  <div class="submit-address dashboard-list">
    <form method="GET">
      <h4 class="bg-grea-3"></h4>
      <div class="search-contents-sidebar">
        <div class="row pad-20">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>목표 금액</strong> (원)
              </label>
              <input type="number" v-model.number="goalAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>적립 기간</strong> (월)
              </label>
              <input type="number" v-model.number="period" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>연 이자율</strong> (%)
              </label>
              <input
                type="number"
                v-model.number="rate"
                class="input-text"
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>금리 방식</strong>
              </label>
              <v-app id="inspire">
                <v-select
                  :items="rateList"
                  v-model="rateMode"
                  :menu-props="{ 'nudge-top':540, 'nudge-left':200, 'z-index': 9999}"
                ></v-select>
              </v-app>
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
              <a @click.prevent="resultShow = true" class="btn btn-md button-theme">결과 확인</a>
            </div>
          </div>
        </div>
        <div v-if="resultShow" id="result" class="row pad-20">
          <div class="result">
            <h6>비과세 기준</h6>
            <br />
            <h2>
              목표 금액
              <strong>{{goalAmount}}원</strong>을 모으려면
              연 이율
              <strong>{{rate}}%</strong>의
              <strong>{{rateMode}}</strong>로
              <strong>{{period}}</strong>개월 동안
              <br />월
              <strong>
                <font color="#ff214f">{{amountPerMonth}}원</font>
              </strong>을 저축하셔야 합니다.
            </h2>
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
      goalAmount: 10000000,
      period: 12,
      rateMode: "",
      rateList: ["단리", "복리"],
      rate: 2.4,

      resultShow: false
    };
  },
  computed:{
    amountPerMonth(){
      if(this.rateMode == '단리'){
        let pRate = this.rate/100;
        return Math.round(this.goalAmount/(this.period+(this.period*(this.period+1)/2)*(pRate/12)),1);
      }
      else if(this.rateMode == '복리'){
        let pRate = this.rate/100;
        
        return Math.round(this.goalAmount/(((Math.pow(1+pRate, ((this.period+1)/12)) - (Math.pow(1+pRate,1/12)))/(Math.pow(1+pRate,1/12)-1))) -this.period,1);
      }
    }
  }
};
</script>

<style>
#result {
  padding: 10px 100px 10px 100px;
}
</style>