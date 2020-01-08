<template>
  <div class="g-footer">
    <router-link class="g-footer-item" to="/home">
      <i class="icon_font icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-footer-item" to="/category">
      <i class="iconfont icon-31leimu"></i>
      <span>分类</span>
    </router-link>
    <router-link class="g-footer-item" to="cart">
      <i class="iconfont icon-cart"></i>
      <span></span>购物车
    </router-link>
    <router-link class="g-footer-item" to="personal">
      <i class="iconfont icon-wo"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .router-link-active{
     color: $link-active-color;
   }
</style>
