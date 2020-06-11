<template>
  <div>
    <!-- Banner start -->
    <div class="banner banner_video_bg" id="banner">
      <div class="pattern-overlay">
        <a
          id="bgndVideo"
          class="player"
          data-property="{videoURL:'https://www.youtube.com/watch?v=5e0LxrLSzok',containment:'.banner_video_bg', quality:'large', autoPlay:true, mute:true, opacity:1}"
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
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

    <!-- Featured Properties start -->
    <div class="featured-properties content-area">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Featured Properties</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Sale</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Masons Villas</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Rent</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Park avenue</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Sale</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Real Luxury Villa</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Rent</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Masons Villas</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Rent</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Masons Villas</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Sale</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Real Luxury Villa</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Rent</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Park avenue</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="property-box-4">
              <div class="property-photo">
                <img
                  class="img-fluid"
                  src="http://placehold.it/255x170"
                  alt="properties"
                />
                <div class="tag">For Sale</div>
                <div class="price-box"><span>$850.00</span> / month</div>
              </div>
              <div class="detail">
                <div class="heading">
                  <h3>
                    <a href="properties-details.html">Masons Villas</a>
                  </h3>
                  <div class="location">
                    <a href="properties-details.html">
                      <i class="fa fa-map-marker"></i>123 Kathal St. Tampa City
                    </a>
                  </div>
                </div>
                <div class="properties-listing clearfix">
                  <ul>
                    <li>3 Beds</li>
                    <li>2 Baths</li>
                    <li>980 sqft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured Properties end -->

    <!-- Services start -->
    <div class="services content-area bg-grea-3">
      <div class="container">
        <!-- Main title -->
        <div class="main-title text-center">
          <h1>Working with the Neer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="media service-info-3">
              <div class="icon">
                <i class="flaticon-user"></i>
                <h4>01</h4>
              </div>
              <div class="media-body align-self-center">
                <h2>Personalized Service Possible</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a class="rm-btn" href="services.html">Read more...</a>
                <h4>01</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="media service-info-3">
              <div class="icon">
                <i class="flaticon-empire-state-building"></i>
              </div>
              <div class="media-body align-self-center">
                <h2>Luxury Real Estate Experts</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a class="rm-btn" href="services.html">Read more...</a>
                <h4>02</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="media service-info-3">
              <div class="icon">
                <i class="flaticon-discount"></i>
              </div>
              <div class="media-body align-self-center">
                <h2>Modern Building For Rent $ Sell</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a class="rm-btn" href="services.html">Read more...</a>
                <h4>03</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services end -->

    <!-- Categories strat -->
    <div class="categories content-area-7">
      <div class="container">
        <!-- Main title -->
        <div class="main-title text-center">
          <h1>Most Popular Places</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="row">
          <div class="col-lg-5 col-md-12 col-sm-12 col-pad">
            <div class="category">
              <div class="category_bg_box category_long_bg cat-4-bg">
                <div class="category-overlay">
                  <div class="category-content">
                    <h3 class="category-title">
                      <a href="#">Tokyo</a>
                    </h3>
                    <h4 class="category-subtitle">12 Properties</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-sm-6 col-pad">
                <div class="category">
                  <div class="category_bg_box cat-1-bg">
                    <div class="category-overlay">
                      <div class="category-content">
                        <h3 class="category-title">
                          <a href="properties-list-rightside.html">Rome</a>
                        </h3>
                        <h4 class="category-subtitle">27 Properties</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad">
                <div class="category">
                  <div class="category_bg_box cat-5-bg">
                    <div class="category-overlay">
                      <div class="category-content">
                        <h3 class="category-title">
                          <a href="#">Rome</a>
                        </h3>
                        <h4 class="category-subtitle">98 Properties</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad">
                <div class="category">
                  <div class="category_bg_box cat-3-bg">
                    <div class="category-overlay">
                      <div class="category-content">
                        <h3 class="category-title">
                          <a href="#">United States</a>
                        </h3>
                        <h4 class="category-subtitle">98 Properties</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-pad">
                <div class="category">
                  <div class="category_bg_box cat-2-bg">
                    <div class="category-overlay">
                      <div class="category-content">
                        <h3 class="category-title">
                          <a href="#">London</a>
                        </h3>
                        <h4 class="category-subtitle">98 Properties</h4>
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
    <!-- Categories end -->

    <!-- Counters strat -->
    <div class="counters counters-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="counter-box">
              <div class="icon clip-home">
                <i class="flaticon-sale"></i>
              </div>
              <h1 class="counter">967</h1>
              <p>Listings For Sale</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="counter-box">
              <div class="icon clip-home">
                <i class="flaticon-rent"></i>
              </div>
              <h1 class="counter">1276</h1>
              <p>Listings For Rent</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="counter-box">
              <div class="icon clip-home">
                <i class="flaticon-user"></i>
              </div>
              <h1 class="counter">396</h1>
              <p>Agents</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="counter-box">
              <div class="icon clip-home">
                <i class="flaticon-broker"></i>
              </div>
              <h1 class="counter">177</h1>
              <p>Brokers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Counters end -->

    <!-- Our team start -->
    <div class="our-team content-area">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Our Agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <!-- Slick slider area start -->
        <div class="slick-slider-area">
          <div
            class="row slick-carousel"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <div class="slick-slide-item">
              <div class="team-4">
                <div class="team-photo">
                  <img
                    src="http://placehold.it/350x350"
                    alt="agent-2"
                    class="img-fluid"
                  />
                  <div class="social-list clip-home">
                    <a href="#" class="facebook"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a href="#" class="twitter"
                      ><i class="fa fa-twitter"></i
                    ></a>
                    <a href="#" class="google"><i class="fa fa-google"></i></a>
                  </div>
                </div>
                <div class="team-details">
                  <h5><a href="agent-detail.html">Maria Blank</a></h5>
                  <h6>Support Manager</h6>
                  <ul>
                    <li>
                      <i class="flaticon-pin"></i><a>44 New Design Street,</a>
                    </li>
                    <li>
                      <i class="flaticon-mail"></i
                      ><a href="mailto:info@themevessel.com"
                        >info@themevessel.com</a
                      >
                    </li>
                    <li>
                      <i class="flaticon-phone"></i
                      ><a href="tel:+554XX-634-7071"> +55 4XX-634-7071</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="team-4">
                <div class="team-photo">
                  <img
                    src="http://placehold.it/350x350"
                    alt="agent-2"
                    class="img-fluid"
                  />
                  <div class="social-list clip-home">
                    <a href="#" class="facebook"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a href="#" class="twitter"
                      ><i class="fa fa-twitter"></i
                    ></a>
                    <a href="#" class="google"><i class="fa fa-google"></i></a>
                  </div>
                </div>
                <div class="team-details">
                  <h5><a href="agent-detail.html">Maria Blank</a></h5>
                  <h6>Support Manager</h6>
                  <ul>
                    <li>
                      <i class="flaticon-pin"></i><a>44 New Design Street,</a>
                    </li>
                    <li>
                      <i class="flaticon-mail"></i
                      ><a href="mailto:info@themevessel.com"
                        >info@themevessel.com</a
                      >
                    </li>
                    <li>
                      <i class="flaticon-phone"></i
                      ><a href="tel:+554XX-634-7071"> +55 4XX-634-7071</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="team-4">
                <div class="team-photo">
                  <img
                    src="http://placehold.it/350x350"
                    alt="agent-2"
                    class="img-fluid"
                  />
                  <div class="social-list clip-home">
                    <a href="#" class="facebook"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a href="#" class="twitter"
                      ><i class="fa fa-twitter"></i
                    ></a>
                    <a href="#" class="google"><i class="fa fa-google"></i></a>
                  </div>
                </div>
                <div class="team-details">
                  <h5><a href="agent-detail.html">John Pitarshon</a></h5>
                  <h6>Creative Director</h6>
                  <ul>
                    <li>
                      <i class="flaticon-pin"></i><a>44 New Design Street,</a>
                    </li>
                    <li>
                      <i class="flaticon-mail"></i
                      ><a href="mailto:info@themevessel.com"
                        >info@themevessel.com</a
                      >
                    </li>
                    <li>
                      <i class="flaticon-phone"></i
                      ><a href="tel:+554XX-634-7071"> +55 4XX-634-7071</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="team-4">
                <div class="team-photo">
                  <img
                    src="http://placehold.it/350x350"
                    alt="agent-2"
                    class="img-fluid"
                  />
                  <div class="social-list clip-home">
                    <a href="#" class="facebook"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a href="#" class="twitter"
                      ><i class="fa fa-twitter"></i
                    ></a>
                    <a href="#" class="google"><i class="fa fa-google"></i></a>
                  </div>
                </div>
                <div class="team-details">
                  <h5><a href="agent-detail.html">Karen Paran</a></h5>
                  <h6>Office Manager</h6>
                  <ul>
                    <li>
                      <i class="flaticon-pin"></i><a>44 New Design Street,</a>
                    </li>
                    <li>
                      <i class="flaticon-mail"></i
                      ><a href="mailto:info@themevessel.com"
                        >info@themevessel.com</a
                      >
                    </li>
                    <li>
                      <i class="flaticon-phone"></i
                      ><a href="tel:+554XX-634-7071"> +55 4XX-634-7071</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Our team end -->

    <!-- Testimonial start -->
    <div class="testimonial testimonial-2 content-area-5 bg-grea-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Main title -->
            <div class="main-title">
              <h1>Our Testimonial</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
            </div>
          </div>
          <div class="col-lg-12">
            <!-- Slick slider area start -->
            <div class="slick-slider-area">
              <div
                class="row slick-carousel"
                data-slick='{"slidesToShow": 2, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
              >
                <div class="slick-slide-item">
                  <div class="testimonial-info-box">
                    <div class="profile-user">
                      <div class="avatar">
                        <img
                          src="http://placehold.it/100x100"
                          alt="testimonial-2"
                        />
                      </div>
                    </div>
                    <h5>
                      <a href="#">Maikel Alisa</a>
                    </h5>
                    <h6>Web Designer, Uk</h6>
                    <p>
                      <i class="fa fa-quote-left"></i> Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown
                      <i class="fa fa-quote-right"></i>
                    </p>
                  </div>
                </div>
                <div class="slick-slide-item">
                  <div class="testimonial-info-box">
                    <div class="profile-user">
                      <div class="avatar">
                        <img
                          src="http://placehold.it/100x100"
                          alt="testimonial-2"
                        />
                      </div>
                    </div>
                    <h5>
                      <a href="#">Carolyn Stone</a>
                    </h5>
                    <h6>Creative Director, india</h6>
                    <p>
                      <i class="fa fa-quote-left"></i> Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown
                      <i class="fa fa-quote-right"></i>
                    </p>
                  </div>
                </div>
                <div class="slick-slide-item">
                  <div class="testimonial-info-box">
                    <div class="profile-user">
                      <div class="avatar">
                        <img
                          src="http://placehold.it/100x100"
                          alt="testimonial-2"
                        />
                      </div>
                    </div>
                    <h5>
                      <a href="#">Auro Navanth</a>
                    </h5>
                    <h6>Office Manager, New York</h6>
                    <p>
                      <i class="fa fa-quote-left"></i> Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown
                      <i class="fa fa-quote-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial end -->

    <!-- Blog start -->
    <div class="blog content-area">
      <div class="container">
        <!-- Main title -->
        <div class="main-title">
          <h1>Our Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <!-- Slick slider area start -->
        <div class="slick-slider-area">
          <div
            class="row slick-carousel"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <div class="slick-slide-item">
              <div class="blog-1">
                <div class="blog-photo">
                  <img
                    src="http://placehold.it/350x220"
                    alt="small-blog"
                    class="img-fluid"
                  />
                  <div class="date-box">14 Nov</div>
                </div>
                <div class="detail">
                  <h3>
                    <a href="blog-single-sidebar-right.html"
                      >Selling Your Real House</a
                    >
                  </h3>
                  <div class="post-meta">
                    <span
                      ><a href="#"><i class="flaticon-male"></i>Amdin</a></span
                    >
                    <span
                      ><a href="#"><i class="flaticon-comment"></i>27</a></span
                    >
                    <span
                      ><a href="#"><i class="fa fa-heart-o"></i>27</a></span
                    >
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                  <a href="blog-single-sidebar-right.html" class="read-more"
                    >Read more</a
                  >
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="blog-1">
                <div class="blog-photo">
                  <img
                    src="http://placehold.it/350x220"
                    alt="small-blog"
                    class="img-fluid"
                  />
                  <div class="date-box clip-home">21 Feb</div>
                </div>
                <div class="detail">
                  <h3>
                    <a href="blog-single-sidebar-right.html"
                      >Find Your Dream Real Estate</a
                    >
                  </h3>
                  <div class="post-meta">
                    <span
                      ><a href="#"><i class="flaticon-male"></i>Amdin</a></span
                    >
                    <span
                      ><a href="#"><i class="flaticon-comment"></i>27</a></span
                    >
                    <span
                      ><a href="#"><i class="fa fa-heart-o"></i>27</a></span
                    >
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                  <a href="blog-single-sidebar-right.html" class="read-more"
                    >Read more</a
                  >
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="blog-1">
                <div class="blog-photo">
                  <img
                    src="http://placehold.it/350x220"
                    alt="small-blog"
                    class="img-fluid"
                  />
                  <div class="date-box clip-home">21 Feb</div>
                </div>
                <div class="detail">
                  <h3>
                    <a href="blog-single-sidebar-right.html"
                      >Find Your Dream Real Estate</a
                    >
                  </h3>
                  <div class="post-meta">
                    <span
                      ><a href="#"><i class="flaticon-male"></i>Amdin</a></span
                    >
                    <span
                      ><a href="#"><i class="flaticon-comment"></i>27</a></span
                    >
                    <span
                      ><a href="#"><i class="fa fa-heart-o"></i>27</a></span
                    >
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                  <a href="blog-single-sidebar-right.html" class="read-more"
                    >Read more</a
                  >
                </div>
              </div>
            </div>
            <div class="slick-slide-item">
              <div class="blog-1">
                <div class="blog-photo">
                  <img
                    src="http://placehold.it/350x220"
                    alt="small-blog"
                    class="img-fluid"
                  />
                  <div class="date-box clip-home">09 Apr</div>
                </div>
                <div class="detail">
                  <h3>
                    <a href="blog-single-sidebar-right.html"
                      >Buying a Best House</a
                    >
                  </h3>
                  <div class="post-meta">
                    <span
                      ><a href="#"><i class="flaticon-male"></i>Amdin</a></span
                    >
                    <span
                      ><a href="#"><i class="flaticon-comment"></i>27</a></span
                    >
                    <span
                      ><a href="#"><i class="fa fa-heart-o"></i>27</a></span
                    >
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </p>
                  <a href="blog-single-sidebar-right.html" class="read-more"
                    >Read more</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog end -->

    <!-- Intro info start -->
    <div class="intro-info ">
      <div class="container">
        <div class="row intro-section-2">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="intro-text">
              <h3>Subscribe to Newsletter</h3>
              <p>
                Subscribe to get update and information. Don't worry, we won't
                send spam!
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="Subscribe-box">
              <form class="form-inline" action="#" method="GET">
                <input
                  type="text"
                  class="form-control mb-sm-0"
                  id="inlineFormInputName4"
                  placeholder="Email Address"
                />
                <button type="submit" class="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Intro section end -->

  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

import store from "@/store/store.js";

export default {
  name: "Main",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    LoginForm
  },
  mounted() {
    this.isLogin = store.state.isLogin;
  }
};
</script>

<style></style>
