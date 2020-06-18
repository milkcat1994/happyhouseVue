<template>
  <div>
    <main-header />
    <sub-banner title="PLAN" />

    <!-- Dashbord start -->
    <div class="dashboard">
      <div class="container-fluid">
        <div class="row">
    
          <div class="dashboard-content">
            <div class="dashboard-header clearfix">
              <div class="row">
                <div class="col-sm-12 col-md-5">
                </div>
                <div class="col-sm-12 col-md-7">
                  <div class="breadcrumb-nav">
                    <ul>
                      <li :class="{active : priceShow}" @click="showControll(1)" ><button>내게 맞는 집 가격 알아보기</button></li>
                      <li :class="{active : loanShow}" @click="showControll(2)" ><button>대출 이자 계산기</button></li>
                      <li :class="{active : goalShow}" @click="showControll(3)" ><button>목돈 모으기</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <goal v-if="goalShow" />
            <HousePrice v-if="priceShow" />
            <Loan v-if="loanShow" />
            
          </div>
        </div>
      </div>
    </div>
    <!-- Dashbord end -->

    <main-footer />
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import SubBanner from "@/components/SubBanner.vue";
import { getDayDiff } from "@/util/day-common";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import Goal from "@/components/plan/Goal.vue";
import HousePrice from "@/components/plan/HousePrice.vue";
import Loan from "@/components/plan/Loan.vue";

export default {
  name: "plan",

  data() {
    return {
        priceShow : true,
        loanShow : false,
        goalShow : false,
    };
  },
  components: {
    MainHeader,
    SubBanner,
    MainFooter,
    Goal,
    HousePrice,
    Loan,
  },
  computed: {

  },
  created() {

  },
  methods: {
   showControll(num){
     if(num === 1){
       this.priceShow = true;
       this.loanShow = false;
       this.goalShow = false;
     }else if(num === 2){
       this.priceShow = false;
       this.loanShow = true;
       this.goalShow = false;
     }else{
       this.priceShow = false;
       this.loanShow = false;
       this.goalShow = true;
     }
   }
  },
  pdated() {
    //페이지 이동시 가장 상단으로 이동
    let display = this.$refs.listDisplay;
    display.scrollTop = 0;
  }
};
</script>

<style>
</style>