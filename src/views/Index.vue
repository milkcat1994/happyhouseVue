<template>
  <div>
    <main-header></main-header>
    <main-banner />
    <search-section />
    <featured-properties />
    <main-services />
    <main-footer></main-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import MainBanner from "@/components/index/MainBanner.vue";
import SearchSection from "@/components/index/SearchSection.vue";
import FeaturedProperties from "@/components/index/FeaturedProperties.vue";
import MainServices from "@/components/index/MainServices.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "Index",
  components: {
    MainHeader,
    MainBanner,
    SearchSection,
    FeaturedProperties,
    MainServices,
    MainFooter
  }
};
</script>
