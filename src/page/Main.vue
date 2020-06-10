<template>
  <div>
    <LoginForm v-if="!isLogin" />
    <!-- News -->
    <div class="container">
      <p>&nbsp;</p>
      <div class="container">
        <h2 class="text-center mt-0">주요뉴스</h2>
        <hr class="divider my-4" />
      </div>
      <div id="news">
        <div class="article_header">
          <a
            href="https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=016&arti_id=0001667060"
            ><h3 tabindex="0">
              강북도 집값하락…매매가 전망 10개월만에 마이너스로
            </h3></a
          >
          <div class="sponsor">
            <span class="write" id="news_writer" tabindex="0">헤럴드경제</span>
            <span class="bar">|</span>
            <span id="news_write_date" tabindex="0">2020.04.27 11:35</span>
          </div>
        </div>
        <div id="articleBody" class="article_body size4" tabindex="0">
          <!-- size1 ~ size5 -->
          <strong class="media_end_summary"
            >강남발 하락세 주변지역 확대<br />‘거래절벽’…시장 매수우위로
          </strong>
          <span class="end_photo_org"
            ><img
              src="https://imgnews.pstatic.net/image/016/2020/04/27/20200427000469_0_20200427113509486.jpg?type=w647"
              alt=""/></span
          ><br />
          <br />강남발 집값 하락세가 서울 전역으로 번지는 모양새다. 강북지역의
          부동산 매매가격 전망지수가 10개월 만에 하락으로 방향을 틀었다. 또
          매매거래 지수 역시 강남북 모두 전월 대비 반토막도 되지 않는 등
          코로나19 영향으로 인한 &lsquo;거래절벽&rsquo;도 여실히 드러났다.<br />
          <br />27일 KB국민은행 리브온의 월간주택가격동향에 따르면, 서울 지역의
          매매가격 전망지수는 86으로 지난달 99.2에 비해 또다시 하락했다. 특히
          강남 지역의 하락 전망이 나온지 한달 만에 강북지역에서도 10개월 만에
          하락 전망이 나타났다. 이달 강북 지역의 매매가격 전망지수는 89.4로 전월
          상승(104.4)이 우세했던 데에서 방향을 틀었다. 강남지역은 3월(94.2)에
          이어 하락 전망(82.3)이 더욱 힘을 받았다.<br />
          <br />매매가격 전망지수는 전국의 4000여 중개업소를 대상으로 지역의
          매매가격이 상승할 것인지 하락할 것인지 전망을 물어 0~200 범위로 지수로
          나타낸다. 100을 초과할수록 상승을 나타내기 때문에 100 이하로 떨어지면
          하락 전망이 우세하다.<br />
          <br />하락전망은 주택담보대출 규제를 받는 고가 주택의 하락세가 영향을
          미쳤다. 서울 아파트의 분위별 아파트 매매가 가운데 5분위(상위20%)만
          유일하게 하락세로 집계됐다. 이달 5분위 아파트 평균 매매가는
          18억794만원으로 전월 18억1304만원에 비해 0.3% 떨어졌다. 주택담보대출이
          금지된 15억원 이상 초고가 아파트의 하락이 현실화된 것으로 풀이된다.<br />
          <br />거래는 사실상 중지상태인 것으로 나타났다. 매매거래지수
          한자릿수를 나타냈다. 강북지역의 매매거래지수는 5.7로 지난해 5월(5.2)
          이후로 처음으로 한자릿수를 나타냈다. 강남 지역도 3.8로 지난해 5월(3.0)
          이후 최저치를 기록했다.<br />
          <br />박원갑 KB국민은행 부동산수석전문위원은 &ldquo;코로나19라는
          불확실성이 커지면서 강남발 하락세가 주변지역으로 확대되는
          양상&rdquo;이라며 &ldquo;외부의 극단적 사례가 나타나면 부동산 시장은
          동조화 할 수 밖에 없다&rdquo;고 말했다.<br />
          <br />한편 가격이 하락세로 돌아서면서 시장에선 매수자 우위 양상을
          보이고 있는 것으로 나타났다. 강남지역에선 매수우위 지수가 59.6으로
          지난해 하반기 이후 최저치를 기록했다.<br />
          <br />성연진 기자<br />
          <br />
          <br />
          <br />- Copyrights ⓒ 헤럴드경제 & heraldbiz.com, 무단 전재 및 재배포
          금지 -
        </div>
      </div>
      <!-- Contact-->
      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Gitlab</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">Gitlab에 놀러오세요!</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <!--  -->
              <a
                class="d-block"
                href="https://lab.ssafy.com/milkcat1994/happyhouse_vue"
                >gitlab</a
              >
            </div>
          </div>
        </div>
        <!-- Footer-->
        <footer class="bg-light py-5">
          <div class="container">
            <div class="small text-center text-muted">
              Copyright © 2020 - Start Bootstrap
            </div>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

import store from "@/store/store.js";

export default {
  name: "Main",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    LoginForm
  },
  mounted() {
    this.isLogin = store.state.isLogin;
  }
};
</script>

<style></style>
