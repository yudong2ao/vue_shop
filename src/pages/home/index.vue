<template>
  <div class="home">
    <div class="header">
      <home-header></home-header>
    </div>
    <home-scroll :data="reSonData">
      <home-slider></home-slider>
      <nav-bar></nav-bar>
      <homeRecommend @load="getSonData"></homeRecommend>
    </home-scroll>
    <router-view></router-view>
  </div>
</template>

<script>
  import homeHeader from './header';
  import homeSlider from './slider';
  import homeScroll from '@/base/scroll';
  import navBar from './navbar';
  import homeRecommend from './recommend.vue';
  export default {
    name: 'home',
    data() {
      return {
        reSonData: []
      };
    },
    methods: {
      getSonData(msg) {
        this.reSonData = msg;
      }
    },
    components: {
      homeHeader,
      homeSlider,
      homeScroll,
      navBar,
      homeRecommend
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
