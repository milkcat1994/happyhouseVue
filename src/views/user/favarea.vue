<template>
    <div>
        <main-header />
        <sub-banner title="MY PAGE" />
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
                                    <tr v-for="(fav, index) in FavAreas" :key="`fav.user_id`+index"
                                        class="responsive-table">
                                        <td class="listing-photoo">
                                            <img :src="getUrl(fav.img)" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container">
                                            <v-app id="inspire" v-if="!fav.complete">
                                                <v-autocomplete height="50" v-model="address" :loading="loading"
                                                    :items="showAddresses" :search-input.sync="search" no-filter
                                                    class="mx-4" hide-no-data hide-details label="주소 검색" solo
                                                    :menu-props="{ 'nudge-top':367, 'nudge-left':117, 'z-index':9999}">
                                                </v-autocomplete>
                                            </v-app>
                                            <h2>
                                                <a v-if="fav.complete">{{fav.city}}</a>
                                            </h2>
                                            <h5>{{fav.gu}} </h5>
                                            <h6 class="table-property-price">{{fav.dong}}</h6>
                                        </td>
                                        <td class="expire-date"></td>
                                        <td v-if="fav.complete" class="action">
                                            <a @click.prevent="removeFav(index)" class="delete"><i
                                                    class="fa fa-remove"></i> 삭제</a>
                                        </td>
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
    import {
        mapGetters
    } from "vuex";
    import SubBanner from "@/components/SubBanner.vue";
    import MainHeader from "@/components/MainHeader.vue";
    import MainFooter from "@/components/MainFooter.vue";
    import store from "@/store/store.js";
    import {bestSearch} from "@/util/search-common";
    
    export default {
        name: "favarea",
        data() {
            return {
                citys: [],
                gus: [],
                dongs: [],

                city: '',
                gu: '',
                dong: '',

                search: null,
                address: null,
                loading: false,
                addresses: [],
                address: {},
                showAddresses: [],

            }
        },
        components: {
            MainHeader,
            SubBanner,
            MainFooter
        },
        computed: {
            ...mapGetters(["FavAreas"]),
        },
        watch: {
            search(val) {
                val && val !== this.address && this.querySelections(val)
            },
        },
        mounted() {

        },
        updated() {
        },
        methods: {
            removeFav(index) {
                let msg = "관심지역 삭제 처리시 문제가 발생했습니다.";
                let area = {};
                //잘라야됨 this.address
                area.city = this.FavAreas[index].city;
                area.gu = this.FavAreas[index].gu;
                area.dong = this.FavAreas[index].dong;

                alertify.confirm('관심지역 삭제',
                    area.city + ' ' + area.gu + ' ' + area.dong + '을 삭제 하시겠습니까?',
                    () => {
                        http
                            .delete('/user/fav/' + this.$session.get('userId'), {
                                data: {
                                    'area': area
                                }
                            })
                            .then(({
                                data
                            }) => {
                                if (data === "success") {
                                    msg = "관심지역 삭제가 완료되었습니다.";
                                    alertify.success(msg);
                                    store.dispatch("getFavAreas", this.$session.get('userId'));
                                }
                            })
                            .catch(() => {
                                alertify.error(msg, 3, function () {
                                    console.log(area);
                                })
                            })
                    },
                    () => {
                        alertify.error('취소하셨습니다.')
                    }
                );
            },
            saveFav() {
                let msg = "";
                let err = true;

                let obj = {};
                this.address.split(' ').length != 3 &&
                    ((msg = "주소를 올바르게 입력해주세요"), (err = false));
                if (!err) {
                    alertify.error(msg, 3);
                    return false;
                }
                msg = "관심지역 등록 중 오류발생";

                obj.city = this.getAddress(this.address, 0);
                obj.gu = this.getAddress(this.address, 1);
                obj.dong = this.getAddress(this.address, 2);

                const self = this;
                http
                    .post('/user/fav/' + this.$session.get('userId'), obj)
                    .then(({
                        data
                    }) => {
                        if (data === "success") {
                            msg = "관심지역 등록이 완료되었습니다.";
                            alertify.success(msg);
                            self.address = '';
                            self.FavAreas[0]['complete'] = true;
                            store.dispatch("getFavAreas", self.$session.get('userId'));
                        }
                    })
                    .catch(() => {
                        alertify.error(msg, 3, function () {
                            console.log('관심지역 등록도중 서버오류 발생');
                        })
                    })
            },
            addFav() {
                let msg = "";
                let err = false;
                if(this.FavAreas.length > 0){
                    this.FavAreas[0]['complete'] ||
                    ((msg = "관심지역을 먼저 등록해주세요."), err = true,
                        (alertify.error(msg, 3, function () {
                            console.log('먼저 등록해야 사용가능합니다.');
                        })));
                }
                if (err) return false;

                let obj = {};
                obj.user_id = this.$session.get('userId');
                obj.city = '';
                obj.gu = '';
                obj.dong = '';
                obj.complete = false;
                this.FavAreas.unshift(obj);
            },
            undo() {
                this.FavAreas.splice(0, 1);
                this.city = '';
                this.gu = '';
                this.dong = '';
                $('.selectpicker').selectpicker('refresh')
            },
            makeObjectToAddress(data) {
                this.addresses = [];
                for (let idx in data) {
                    this.addresses.push(data[idx].city.concat(' ', data[idx].gu, ' ', data[idx].dong));
                }
            },
            querySelections(v) {
                this.loading = true
                // Simulated ajax query
                const self = this;
                setTimeout(() => {
                    self.showAddresses = self.addresses.filter(e => {
                        return bestSearch(e, v);
                    })
                    this.loading = false
                }, 500)
            },
            getAddress(address, index) {
                return address.split(' ')[index];
            },
            joinAddress(favArea) {
                return favArea.city + ' ' + favArea.gu + ' ' + favArea.dong;
            },
            getUrl(img) {
                if (!img) return '/img/unknownImg.jpg';
                return "/img/area/" + img;
            },
        },
        created() {
            store.dispatch("getFavAreas", this.$session.get('userId'));

            http
                .get('/util/address')
                .then(({
                    data
                }) => {
                    this.makeObjectToAddress(data);
                })
                .catch((error) => {
                    alertify.error(msg, 3, function () {
                        console.log(error);
                    });
                });
        }
    }
</script>

<style>

</style>