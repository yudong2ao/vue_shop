<template>
  <div class="home">
    <div class="header">
      <home-header></home-header>
    </div>
    <home-scroll>
      <home-slider></home-slider>
      <nav-bar></nav-bar>
    </home-scroll>
  </div>
</template>

<script>
  import homeHeader from './header';
  import homeSlider from './slider';
  import homeScroll from '@/base/scroll';
  import navBar from './navbar';
  export default {
    name: 'home',
    data() {
      return { };
    },
    components: {
      homeHeader,
      homeSlider,
      homeScroll,
      navBar
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
