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
              <input type="text" v-model.number="goalAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>적립 기간</strong> (월)
              </label>
              <input type="email" v-model.number="period" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>연 이자율</strong> (%)
              </label>
              <input type="text" class="input-text" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label><strong>금리 방식</strong></label>
               <v-select :items="rateList" v-model="rateMode" ></v-select>
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
              <a href="#" class="btn btn-md button-theme">결과 확인</a>
            </div>
          </div>
        </div>
        <div class="row pad-20">
          <div class="result">
            <h5>15.4% 세후 기준</h5>
            <br />
            <h2>
              목표 금액 10,000,000원을 모으려면 연 이율 2.4%의 단리로 12개월 동안
              월 824,269원을 저축하셔야 합니다.
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
      rateList: [
         'State 1','State 2'
      ]
    };
  }
};
</script>

<style>
</style>