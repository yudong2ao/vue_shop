<template>
    <navbar class="navbar homenavbar">
      <i class="iconfont icon-saoyisao" slot="left"></i>
      <div slot="center">搜索</div>
      <i class="iconfont icon-new" slot="right"></i>
    </navbar>
</template>

<script>
  import navbar from '../../base/navbar/index';
  export default {
    name: 'home-header',
    components: {
      navbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixins";
  .navbar.homenavbar{
    background-color: transparent;
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
