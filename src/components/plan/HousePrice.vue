<template>
  <div class="submit-address dashboard-list">
    <form method="GET">
      <h4 class="bg-grea-3"></h4>
      <div class="search-contents-sidebar">
        <div class="row pad-20">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>현재 보유 금액</strong> (원)
              </label>
              <input type="text" v-model.number="holdingAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>월 급여</strong> (원)
              </label>
              <input type="email" v-model.number="monthlySalary" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>월 고정 지출</strong> (원)
              </label>
              <input type="email" v-model.number="monthlyExpenses" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>금리</strong> (%)
              </label>
              <input type="text" v-model.number="rate" class="input-text" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>상환기간</strong> (년)
              </label>
              <input type="text" v-model.number="period" class="input-text" name="phone" placeholder="Phone" />
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
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <table class="table table-condensed">
                          <thead class="bg-active">
                            <tr>
                              <td>
                                <strong></strong>
                              </td>
                              <td class="text-center">
                                <strong>기준</strong>
                              </td>
                              <td class="text-center">
                                <strong>부채</strong>
                              </td>
                              <td class="text-right">
                                <strong>집 값</strong>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td class="text-center">여유</td>
                              <td class="text-center">0원</td>
                              <td class="text-right">200,000,000원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center"></td>
                              <td class="text-center">24,300,000원</td>
                              <td class="text-right">224,300,000원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center">적정</td>
                              <td class="text-center">54,300,000원</td>
                              <td class="text-right">254,300,000원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center"></td>
                              <td class="text-center">94,800,000원</td>
                              <td class="text-right">294,800,000원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center">절약 필요</td>
                              <td class="text-center">115,600,000원</td>
                              <td class="text-right">315,600,000원</td>
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
      holdingAmount : 200000000,
      monthlySalary : 3500000,
      monthlyExpenses : 3000000,
      rate : 3.2,
      period : 30,

      resultShow: false,
    };
  },
};
</script>

<style>
#result {
  padding: 10px 100px 10px 100px;
}
</style>