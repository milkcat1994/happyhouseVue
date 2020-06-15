<template>
    <div>
        <main-header />
        <sub-banner />
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
                                        <td class="title-container">
                                            <h2><a href="#">{{fav.city}}</a></h2>
                                            <h5>{{fav.gu}} </h5>
                                            <h6 class="table-property-price">{{fav.dong}}</h6>
                                        </td>
                                        <td class="expire-date"></td>
                                        <td class="action">
                                            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
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
    import SubBanner from "@/components/qna/SubBanner.vue";
    import MainHeader from "@/components/MainHeader.vue";
    import MainFooter from "@/components/MainFooter.vue";
    import store from "@/store/store.js";

    export default {
        name: "favarea",
        components: {
            MainHeader,
            SubBanner,
            MainFooter
        },
        computed:{
            ...mapGetters(["FavAreas"]),
        },
        methods: {

        },
        created(){
            store.dispatch("getFavAreas", this.$session.get('userId'));
        }
    }
</script>

<style>

</style>