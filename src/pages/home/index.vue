<template>
  <div class="home">
    <div class="header">
      <home-header></home-header>
    </div>
    <div class="swiper">
      <home-slider></home-slider>
    </div>
  </div>
</template>

<script>
  import homeHeader from './header';
  import homeSlider from './slider';
  export default {
    name: 'home',
    data() {
      return { };
    },
    components: {
      homeHeader,
      homeSlider
    }
  };
</script>

<style lang="scss" scoped>
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>
