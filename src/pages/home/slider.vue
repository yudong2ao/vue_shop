<template>
  <div class="swiperBox">
    <loading></loading>
    <!--<swiper v-if="swiperArray.length" :direction="direction" :interval="interval" :loop="loop" :pagination="pagination" class="swiper">
      <swiper-slide class="swiper-slide" v-for="(item,index) in swiperArray" :key="index" slot="swiperfirst">
        <a :href="item.linkUrl" class="swiperlink">
          <img :src="item.picUrl" alt="" class="swiperurl">
        </a>
      </swiper-slide>
    </swiper>-->
  </div>
</template>

<script>
  import swiper from '@/base/slider/';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {swiperOptions} from './config';
  import {getHomeSlider} from '../../api/home';
  import loading from '@/base/loading/';
  export default {
    name: 'home-slider',
    components: {
      swiper,
      swiperSlide,
      loading
    },
    data() {
      return {
        direction: swiperOptions.direction,
        loop: swiperOptions.loop,
        pagination: swiperOptions.pagination,
        interval: swiperOptions.interval,
        swiperArray: []
      };
    },
    methods: {
      getSlider() {
        getHomeSlider().then(slider => {
          this.swiperArray = slider;
        });
      }
    },
    created() {
      this.getSlider();
    }
  };
</script>

<style scoped lang="scss">
  .swiperBox{
    width: 100%;
    height: 183px;
  }
  .swiper{
    width: 100%;
    height: 183px;
  }
  .swiperlink{
     display: block;
   }
  .swiperlink,
  .swiperurl{
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
</style>
