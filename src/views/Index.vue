<template>
  <div>
    <main-banner />
    <search-section />
    <featured-properties />
    <main-services />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/index/MainBanner.vue";
import SearchSection from "@/components/index/SearchSection.vue";
import FeaturedProperties from "@/components/index/FeaturedProperties.vue";
import MainServices from "@/components/index/MainServices.vue";

export default {
  name: "Index",
  components: {
    MainBanner,
    SearchSection,
    FeaturedProperties,
    MainServices
  }
};
</script>
