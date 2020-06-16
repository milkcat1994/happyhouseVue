<template>
    <div>
        <main-header />
        <sub-banner title="MY PAGE"/>
        <!-- Dashboard start -->
        <div class="dashboard container">
            <div class="container-fluid">
                <div class="row">
                    <div class="dashboard-content">
                        <div class="dashboard-header clearfix">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <h4>관심지역</h4>
                                </div>
                                <div class="col-sm-12 col-md-6">
              <a @click="addFav" class="pull-right btn btn-md button-theme">관심지역 추가</a>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-list">
                            <h3>관심지역 리스트</h3>
                            <table class="manage-table">
                                <tbody>
                                    <tr v-for="(fav, index) in FavAreas" :key="`fav.user_id`+index" class="responsive-table">
                                        <td class="listing-photoo">
                                            <img src="http://placehold.it/192x127" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container" >
                                            <!-- selectpicker 추가하기 -->
                                                <!-- 시/도 -->
                                                <select v-if="!fav.complete" v-model="city" @change="getGu" class=" search-fields" data-size="5" data-live-search="true" >
                                                    <option value=''>시/도 선택</option>
                                                    <option v-for="tcity in citys" :key="tcity" :value="tcity" >{{tcity}}</option>
                                                </select>

                                                <!-- 구/군 -->
                                                <select v-if="!fav.complete" v-model="gu" @change="getDong" class=" search-fields" data-size="5" data-live-search="true" >
                                                    <option value=''>구/군 선택</option>
                                                    <option v-for="tgu in gus" :key="tgu" :value="tgu" >{{tgu}}</option>
                                                </select>

                                                <!-- 동 -->
                                                <select v-if="!fav.complete" v-model="dong" class=" search-fields" data-size="5" data-live-search="true" >
                                                    <option value=''>동 선택</option>
                                                    <option v-for="tdong in dongs" :key="tdong" :value="tdong">{{tdong}}</option>
                                                </select>
                                            <h2>
                                                <a v-if="fav.complete">{{fav.city}}</a>
                                            </h2>
                                            <h5>{{fav.gu}} </h5>
                                            <h6 class="table-property-price">{{fav.dong}}</h6>
                                        </td>
                                        <td class="expire-date"></td>
                                        <td v-if="fav.complete" class="action">
                                            <a @click.prevent="removeFav(index)" class="delete"><i class="fa fa-remove"></i> 삭제</a>
                                        </td>
                                        <!-- 아래는 새롭게 추가한 Fav이다. -->
                                        <td v-else class="action">
                                            <a @click.prevent="saveFav"><i class="fa fa-pencil"></i> 등록</a>
                                            <a @click.prevent="undo" class="delete"><i class="fa fa-remove"></i> 취소</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dashboard end -->

        <main-footer />
    </div>
</template>

<script>
    import http from "@/util/http-common";
    import {mapGetters} from "vuex";
    import SubBanner from "@/components/SubBanner.vue";
    import MainHeader from "@/components/MainHeader.vue";
    import MainFooter from "@/components/MainFooter.vue";
    import store from "@/store/store.js";

    export default {
        name: "favarea",
        data(){
            return{
                citys:[],
                gus:[],
                dongs:[],

                city:'',
                gu:'',
                dong:'',
            }
        },
        components: {
            MainHeader,
            SubBanner,
            MainFooter
        },
        computed:{
            ...mapGetters(["FavAreas"]),
        },
        mounted() {
            $(".selectpicker").selectpicker();
        },
        updated(){
            $('.selectpicker').selectpicker('refresh')
        },
        methods: {
            removeFav(index){
                let msg = "관심지역 삭제 처리시 문제가 발생했습니다.";
                let area = {};
                area.city = this.FavAreas[index].city;
                area.gu = this.FavAreas[index].gu;
                area.dong = this.FavAreas[index].dong;

                alertify.confirm('관심지역 삭제',
                    area.city+' '+area.gu+' '+area.dong+ '을 삭제 하시겠습니까?',
                    () =>{
                        http
                        .delete('/user/fav/'+this.$session.get('userId'), {data:{'area': area}})
                        .then(({ data }) => {
                            if (data === "success") {
                                msg = "관심지역 삭제가 완료되었습니다.";
                                alertify.success(msg);
                                store.dispatch("getFavAreas", this.$session.get('userId'));
                            }
                        })
                        .catch(() => {
                            alertify.error(msg, 3, function(){  console.log(area);})
                        })},
                    () => {alertify.error('취소하셨습니다.')}
                );
            },
            saveFav(){
                let msg = "";
                let err = true;
                console.log(this.FavAreas[0]['complete']);

                let obj = {};
                this.city=='' &&
                    ((msg = "시/도 정보를 선택해주세요."), (err = false));
                err && this.gu=='' &&
                    ((msg = "구/군 정보를 선택해주세요."), (err = false));
                err && this.dong=='' &&
                    ((msg = "동 정보를 선택해주세요."), (err = false));
                console.log(this.gu=='');
                if (!err){
                    alertify.error(msg, 3);
                    return false;
                }
                msg = "관심지역 등록 중 오류발생";

                obj.city = this.city;
                obj.gu = this.gu;
                obj.dong = this.dong;

                http
                .post('/user/fav/'+this.$session.get('userId'), obj)
                .then(({ data }) => {
                    if (data === "success") {
                        msg = "관심지역 등록이 완료되었습니다.";
                        alertify.success(msg);
                        this.FavAreas[0]['complete'] = true;
                        store.dispatch("getFavAreas", this.$session.get('userId'));
                    }
                })
                .catch(() => {
                    alertify.error(msg, 3, function(){  console.log('관심지역 등록도중 서버오류 발생');})
                })
            },
            addFav(){
                let msg = "";
                let err = false;
                this.FavAreas[0]['complete'] ||
                    ((msg = "관심지역을 먼저 등록해주세요."), err=true,
                    (alertify.error(msg, 3, function(){  console.log('먼저 등록해야 사용가능합니다.');})));
                if(err) return false;

                let obj = {};
                obj.user_id = this.$session.get('userId');
                obj.city = '';
                obj.gu = '';
                obj.dong = '';
                obj.complete = false;
                this.FavAreas.unshift(obj);

                msg = '시,도 정보를 가져올 수 없습니다.';
                http
                    .get('/util/city')
                    .then(({data}) => {
                        console.dir(data);
                        this.citys = data;
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function(){  console.log(msg); });
                    })
            },
            getGu(){
                let msg = '구,군 정보를 가져올 수 없습니다.';
                http
                    .post('/util/gu', {'city':this.city})
                    .then(({data}) => {
                            this.gus = data;
                            this.gu = '';
                            this.dong = '';
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function(){  console.log(this.city); });
                    })
            },
            getDong(){
                let msg = '동 정보를 가져올 수 없습니다.';
                http
                    .post('/util/dong', {'gu':this.gu})
                    .then(({data}) => {
                            this.dongs = data;
                            this.dong = '';
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function(){  console.log(msg); });
                    })
            },
            undo(){
                this.FavAreas.splice(0,1);
                this.city = '';
                this.gu = '';
                this.dong = '';
            $('.selectpicker').selectpicker('refresh')
            }
        },
        created(){
            store.dispatch("getFavAreas", this.$session.get('userId'));
        }
    }
</script>

<style>

</style>