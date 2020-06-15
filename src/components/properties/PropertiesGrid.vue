<template>

                            <!-- :aptName="property.aptName"
                            :city="FavAreas[favIndex].city"
                            :gu="FavAreas[favIndex].gu"
                            :dong="FavAreas[favIndex].dong" -->
    <!-- Properties section body start -->
    <div class="fetching-properties hidden-sm hidden-xs">
        <div class="col-lg-6 col-sm-6 col-sm-6">
            <div class="property-box" id="1">
                <div class="property-thumbnail">
                    <a href="properties-details.html" class="property-img">
                        <!-- <div class="listing-badges">
                            <span class="featured">Featured</span>
                        </div> -->
                        <div class="price-box"><span>$850.00</span></div>
                        <img class="d-block w-100" src="http://placehold.it/300x267" alt="properties">
                    </a>
                </div>
                <div class="detail">
                    <h1 class="title">
                        <router-link to="#">{{aptName}}</router-link>
                    </h1>

                    <div class="location">
                        <a href="properties-details.html">
                            <i class="flaticon-pin"></i>{{address}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Properties section body end -->

</template>

<script>
    export default {
        props: ['aptName', 'city', 'gu', 'dong'],
        computed:{
            address(){
                return this.city + ' ' + this.gu + ' ' + this.dong;
            }
        }

    }
</script>

<style>

</style>