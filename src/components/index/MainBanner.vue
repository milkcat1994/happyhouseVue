<template>
  <!-- Banner start -->
  <div class="banner banner_video_bg" id="banner">
    <div class="pattern-overlay">
      <a
        id="bgndVideo"
        class="player"
        data-property="{videoURL:'https://www.youtube.com/watch?v=5e0LxrLSzok',containment:'.banner_video_bg', quality:'large', autoPlay:true, mute:true, showControls:false,stopMovieOnBlur:false, opacity:1}"
        >bg</a
      >
    </div>
    <div id="bannerCarousole" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item banner-max-height active">
          <div
            class="carousel-caption banner-slider-inner banner-slider-inner-2 d-flex h-100 text-center"
          >
            <div class="carousel-content container">
              <div class="text-center">
                <h3 class="text-uppercase">Find Your Dreem Property</h3>
                <p>
                </p>
                <div class="inline-search-area isa-4">
                  <div class="row">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner end -->
</template>

<script>
export default {
  name: "MainBanner",
  mounted() {
        $(".player").YTPlayer({
            mobileFallbackImage: "img/banner/banner-1.jpg"
        });
        $(".selectpicker").selectpicker();
  }
};
</script>

<style></style>
