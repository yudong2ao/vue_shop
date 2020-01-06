<template>
  <div class="navbar">
    <div class="navbaritemleft" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="navbaritemcenter" v-if="$slots.center">
      <div>
        <slot name="center"></slot>
      </div>
    </div>
    <div class="navbaritemright" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  };
</script>

<style lang="scss" scoped>
.navbar{
  @import '../../assets/scss/mixins';
  @include flex-justify();
  height: 50px;
  position: relative;
  width: 100%;
  background-color: #fff;
  &itemleft{
    margin-left: 10px;
  }
  &itemcenter{
    margin: auto 10px;
    position: absolute;
    left: 20%;
    right: 20%;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      @include ellipsis();
      font-size: 16px;
      line-height: 1.4;
    }
  }
  &itemright{
    margin-right: 10px;
    margin-left: auto;
  }
}
</style>
