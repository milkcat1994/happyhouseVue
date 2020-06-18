<template>

    <!-- Properties section body start -->
    <div class="hidden-sm hidden-xs col-lg-6 col-sm-6 col-sm-6">
        <div class="">
            <div class="property-box property-clickable" :id="'id-property-box'+property.no" @click="moveDetail()">
                <div class="property-thumbnail">
                    <a href="#" class="property-img">
                        <div class="price-box"><span>{{property.dealAmount}}만원</span></div>
                        <img class="d-block w-100" :src="getUrl(property.img)" alt="properties">
                    </a>
                </div>
                <div class="detail">
                    <h1 class="title" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
                        <router-link to="#">{{property.aptName}}</router-link>
                    </h1>

                    <div class="location" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
                        <a href="#">
                            <i class="flaticon-pin"></i>{{address}}
                        </a>
                    </div>
                </div>
                <ul class="facilities-list clearfix">
                    <li>
                        <span>건축 연도</span>{{ property.buildYear}}
                    </li>
                    <li>
                        <span>거래 연도</span>{{ property.dealYear}}
                    </li>
                    <li>
                        <span>면적</span>{{ areaRound}}m<sup>2</sup>
                    </li>
                    <li>
                        <span>층수</span>{{ property.floor}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Properties section body end -->

</template>

<script>
    import store from "@/store/store.js";
    export default {
        props: ['property'],
        computed: {
            address() {
                return this.property.city + ' ' + this.property.gu + ' ' + this.property.dong;
            },
            areaRound() {
                return Math.round(this.property.area);
            },
        },
        methods: {
            getUrl(img) {
                if (!img) return '/img/house/unknown.png';
                return "/img/house/" + img;
            },
            moveDetail() {
                store.dispatch("saveRecentHouse", this.property);
                this.$router.push('/house/detail?no=' + this.property.no + '&dong=' + this.property.dong);
            },
        }

    }
</script>

<style>
    .property-clickable :hover {
        cursor: pointer;
    }
</style>