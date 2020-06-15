<template>
  <!-- Sub banner start -->
  <div  class="sub-banner">
    <div class="container">
       <div class="breadcrumb-area">
         <h1>{{ title }}</h1>
        <!-- <ul class="breadcrumbs">
           <li><a href="index.html">Home</a></li>
          <li class="active">Properties Fullwidth</li>
        </ul>  -->
      </div> 
    </div>
  </div>
  <!-- Sub Banner end -->
</template>

<script>
export default {
  props: ['title'],
  name: "SubBanner",
};
</script>

<style>
.sub-banner{
  background-image : url('/img/bannerImg.jpg');
  background-repeat : no-repeat;
	background-size : cover;
}
</style>
