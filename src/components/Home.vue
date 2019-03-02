<template>
   <div class="container">

     <h2 class="animated bounceInDown" style="color:black;font-weight: bold;"> CHOSE YOUR SMART FARM CONTROL </h2>
     <router-link to="/manual">
  <figure class="snip1273 animated bounceInDown delay-1s" >
    <img src="https://steemitimages.com/0x0/https://s3-us-west-2.amazonaws.com/huntimages/production/steemhunt/2018-11-15/97bbed78-serre-connectee-hambach-e1538413310288.jpg" alt="sample72" />
    <figcaption class="text-center">
      <h3 class="caption-text">SMART GREENHOUSE</h3>
      <p class="caption-underText">Manage your devices</p>
    </figcaption>
    <a href="#"></a>
  </figure>
     </router-link>
  <figure class="snip1273 animated bounceInDown delay-2s">
    <img src="http://jclao.com/wp-content/uploads/2018/04/coming-soon.jpg" alt="sample72"/>
    <figcaption>
      <h3 class="caption-text">SMART BARN</h3>
      <p class="caption-underText">Manage your devices</p>
    </figcaption>
    <a href="#"></a>
  </figure>

     </div>
   </div>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
        name: "home",
        data(){
          return {
            swiperOption: {

              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
              height: 100,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false
              }

            }
          }
        },
        components: {
          swiper,
          swiperSlide
        }
    }
</script>

<style scoped>
.row.px-4.px-sm-5{
  display: none;
}
.snip1273 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  margin: 10px;
  width: 100%;
  color: #ffffff;
  text-align: left;
  background-color: #000000;
  font-size: 16px;
}
.snip1273 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.snip1273 img {
  position: relative;
  max-width: 100%;
  vertical-align: top;
}
.snip1273 figcaption {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  padding: 20px 30px;
}
.snip1273 figcaption:before,
.snip1273 figcaption:after {
  width: 1px;
  height: 0;
}
.snip1273 figcaption:before {
  right: 0;
  top: 0;
}
.snip1273 figcaption:after {
  left: 0;
  bottom: 0;
}
.snip1273 h3,
.snip1273 p {
  line-height: 1.5em;
}
.snip1273 h3 {
  margin: 0 0 5px;
  font-weight: 700;
  text-transform: uppercase;
}
.snip1273 p {
  font-size: 0.8em;
  font-weight: 500;
  margin: 0 0 15px;
}
.snip1273 a {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
.snip1273:before,
.snip1273:after,
.snip1273 figcaption:before,
.snip1273 figcaption:after {
  position: absolute;
  content: '';
  background-color: #ffffff;
  z-index: 1;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  opacity: 0.8;
}
.snip1273:before,
.snip1273:after {
  height: 1px;
  width: 0%;
}
.snip1273:before {
  top: 0;
  left: 0;
}
.snip1273:after {
  bottom: 0;
  right: 0;
}
.snip1273:hover img,
.snip1273.hover img {
  opacity: 0.4;
}
.snip1273:hover figcaption,
.snip1273.hover figcaption {
  opacity: 1;
}
.snip1273:hover figcaption:before,
.snip1273.hover figcaption:before,
.snip1273:hover figcaption:after,
.snip1273.hover figcaption:after {
  height: 100%;
}
.snip1273:hover:before,
.snip1273.hover:before,
.snip1273:hover:after,
.snip1273.hover:after {
  width: 100%;
}
.snip1273:hover:before,
.snip1273.hover:before,
.snip1273:hover:after,
.snip1273.hover:after,
.snip1273:hover figcaption:before,
.snip1273.hover figcaption:before,
.snip1273:hover figcaption:after,
.snip1273.hover figcaption:after {
  opacity: 0.1;
}
.caption-text{
  color: white;
}
</style>
