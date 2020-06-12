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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </p>
                <div class="inline-search-area isa-4">
                  <div class="row">
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <select
                        class="selectpicker search-fields"
                        name="any-status"
                      >
                        <option>Any Status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                      </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <select
                        class="selectpicker search-fields"
                        name="all-type"
                      >
                        <option>All Type</option>
                        <option>Apartments</option>
                        <option>Shop</option>
                        <option>Restaurant</option>
                        <option>Villa</option>
                      </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <select
                        class="selectpicker search-fields"
                        name="bedrooms"
                      >
                        <option>Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <select
                        class="selectpicker search-fields"
                        name="bathrooms"
                      >
                        <option>Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <select
                        class="selectpicker search-fields"
                        name="location"
                      >
                        <option>location</option>
                        <option>United States</option>
                        <option>American Samoa</option>
                        <option>Belgium</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-4 col-6 search-col">
                      <button class="btn button-theme btn-search btn-block">
                        <i class="fa fa-search"></i><strong>Search</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="inline-search-area isa-3 clearfix">
                  <div class="row clearfix">
                    <div class="col-md-6 col-sm-6 col-6">
                      <select
                        class="selectpicker search-fields"
                        name="any-status"
                      >
                        <option>Any Status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                      <select
                        class="selectpicker search-fields"
                        name="all-type"
                      >
                        <option>All Type</option>
                        <option>Apartments</option>
                        <option>Shop</option>
                        <option>Restaurant</option>
                        <option>Villa</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                      <select
                        class="selectpicker search-fields"
                        name="bedrooms"
                      >
                        <option>Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                      <select
                        class="selectpicker search-fields"
                        name="bathrooms"
                      >
                        <option>Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                      <select
                        class="selectpicker search-fields"
                        name="location"
                      >
                        <option>location</option>
                        <option>United States</option>
                        <option>American Samoa</option>
                        <option>Belgium</option>
                        <option>Canada</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                      <button class="btn button-theme btn-search btn-block">
                        <i class="fa fa-search"></i><strong>Search</strong>
                      </button>
                    </div>
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
  name: "MainBanner"
};
</script>

<style></style>
