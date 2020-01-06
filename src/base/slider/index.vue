<template>
      <swiper :options="swiperOption" class="swiper">
        <slot name="swiperfirst"></slot>
        <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
  import { swiper } from 'vue-awesome-swiper';
  export default {
    name: 'slider',
    components: {
      swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          loop: this.loop,
          slidersPerView: 1,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          },
          watchOverflow: true
        }
      };
    }
  };
</script>

<style scoped lang="scss">
.swiper-container{
  height: 100%;
  width: 100%;
}
</style>
