<template>
  <div class="loading-box">
    <span class="load-img" v-if="indicator==='on'">
      <slot><img src="./loading.gif" alt=""></slot>
    </span>
    <span class="load-text" v-if="text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      indicator: {
        type: String,
        default: 'on',
        validator(value) {
          return ['on', 'off'].indexOf(value) > -1;
        }
      },
      text: {
        type: String,
        default: '加载中……'
      }
    }
  };
</script>

<style scoped>

</style>
