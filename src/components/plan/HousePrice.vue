<template>
  <div class="submit-address dashboard-list">
    <form>
      <h4 class="bg-grea-3"></h4>
      <div class="search-contents-sidebar">
        <div class="row pad-20">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>현재 보유 금액</strong> (원)
              </label>
              <input type="number" v-model.number="holdingAmount" class="input-text" />
              <h6></h6>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>월 급여</strong> (원)
              </label>
              <input type="number" v-model.number="monthlySalary" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>월 고정 지출</strong> (원)
              </label>
              <input type="number" v-model.number="monthlyExpenses" class="input-text" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="form-group">
              <label>
                <strong>금리</strong> (%)
              </label>
              <input type="number" v-model.number="rate" class="input-text"/>
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
                              <td class="text-right">{{holdingAmount}}원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center"></td>
                              <td class="text-center">{{m1}}원</td>
                              <td class="text-right">{{addTwo(m1,limit)}}원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center">적정</td>
                              <td class="text-center">{{m2}}원</td>
                              <td class="text-right">{{addTwo(m2,limit)}}원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center"></td>
                              <td class="text-center">{{m3}}원</td>
                              <td class="text-right">{{addTwo(m3,limit)}}원</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-center">절약 필요</td>
                              <td class="text-center">{{limit}}원</td>
                              <td class="text-right">{{addTwo(holdingAmount,limit)}}원</td>
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
      holdingAmount : 100000000,  //보유금액
      monthlySalary : 3500000,     //급여
      monthlyExpenses : 3000000,        //지출
      //상환금액 S-E
      p:0,
      //최대 가능
      limit:0,

      //중간 필요 값
      m1:0,
      m2:0,
      m3:0,

      rate : 3,
      period : 1,

      resultShow: false,
    };
  },
  watch:{
      holdingAmount(){
        this.resultShow = false;
      },
      monthlySalary(){
        this.resultShow = false;
      },
      monthlyExpenses(){
        this.resultShow = false;
      },
      rate(){
        this.resultShow = false;
      },
      period(){
        this.resultShow = false;
      }
  },
  methods:{
    setObj(){
      console.log('run');
      let pRate = this.rate / 100; //이자율
        let per = this.period * 12;

        this.p = this.monthlySalary - this.monthlyExpenses;

        this.limit = Math.round(this.p*(Math.pow(1+pRate/12,per)-1)/((pRate/12)*Math.pow(1+pRate/12,per)),1);

        this.m1 = Math.round(this.limit*0.4,1);
        this.m2 = Math.round(this.limit*0.6,1);
        this.m3 = Math.round(this.limit*0.8,1);

      console.log(this.resultShow);
        this.resultShow = true;
      console.log(this.resultShow);
    },
    addTwo(a,b){
      return a+b;
    }
  }
};
</script>

<style>
#result {
  padding: 10px 100px 10px 100px;
}
</style>