<template>
  <!-- Search Section start -->
  <div
    class="search-section search-area pb-hediin-12 bg-grea animated fadeInDown"
    id="search-style-1"
  >
    <div class="container">
      <div class="search-section-area">
        <div class="search-area-inner">
          <div class="search-contents">
            <form method="GET">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <select
                      class="selectpicker search-fields"
                      name="any-status"
                    >
                      <option>Any Status</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="all-type">
                      <option>All Type</option>
                      <option>Apartments</option>
                      <option>Shop</option>
                      <option>Restaurant</option>
                      <option>Villa</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="bedrooms">
                      <option>Bedrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="bathrooms">
                      <option>Bathrooms</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <select class="selectpicker search-fields" name="location">
                      <option>location</option>
                      <option>United States</option>
                      <option>American Samoa</option>
                      <option>Belgium</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="form-group">
                    <button class="search-button">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Search Section end -->
</template>

<script>
export default {
  name: "SearchSection"
};
</script>

<style></style>
