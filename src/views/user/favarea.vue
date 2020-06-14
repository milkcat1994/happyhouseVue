<template>
    <div>
        <main-header />
        <sub-banner />
        <!-- Dashboard start -->
        <div class="dashboard">
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
                                    <tr class="responsive-table">
                                        <td class="listing-photoo">
                                            <img src="http://placehold.it/192x127" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container">
                                            <h2><a href="#">Travel To England</a></h2>
                                            <h5><i class="flaticon-pin"></i> 123 Kathal St. Tampa City, </h5>
                                            <h6 class="table-property-price">$900 / monthly</h6>
                                        </td>
                                        <td class="expire-date">4.01.2019</td>
                                        <td class="action">
                                            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                        </td>
                                    </tr>
                                    <tr class="responsive-table">
                                        <td class="listing-photoo">
                                            <img src="http://placehold.it/192x127" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container">
                                            <h2><a href="#">Amazing Hotel</a></h2>
                                            <h5><i class="flaticon-pin"></i> 123 Kathal St. Tampa City, </h5>
                                            <h6 class="table-property-price">$900 / monthly</h6>
                                        </td>
                                        <td class="expire-date">4.01.2019</td>
                                        <td class="action">
                                            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                        </td>
                                    </tr>
                                    <tr class="responsive-table">
                                        <td class="listing-photoo">
                                            <img src="http://placehold.it/192x127" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container">
                                            <h2><a href="#">Royal Botanic Gardens Sydney</a></h2>
                                            <h5><i class="flaticon-pin"></i> 123 Kathal St. Tampa City, </h5>
                                            <h6 class="table-property-price">$900 / monthly</h6>
                                        </td>
                                        <td class="expire-date">4.01.2019</td>
                                        <td class="action ">
                                            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
                                            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
                                            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
                                        </td>
                                    </tr>
                                    <tr class="responsive-table">
                                        <td class="listing-photoo">
                                            <img src="http://placehold.it/192x127" alt="listing-photo"
                                                class="img-fluid">
                                        </td>
                                        <td class="title-container">
                                            <h2><a href="#">Radisson hotel</a></h2>
                                            <h5><i class="flaticon-pin"></i> 123 Kathal St. Tampa City, </h5>
                                            <h6 class="table-property-price">$900 / monthly</h6>
                                        </td>
                                        <td class="expire-date">4.01.2019</td>
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
    }
</script>

<style>

</style>