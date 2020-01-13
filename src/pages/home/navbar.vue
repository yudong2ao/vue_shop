<template>
  <div>
    <ul>
      <li v-for="(item,index) in navbarArray" :key="index"><a :href="item.link"><img :src="item.img" alt=""><span>{{item.text}}</span></a></li>
    </ul>
  </div>
</template>

<script>
  import {navbarData} from './config';
  export default {
    name: 'navbar',
    created() {
      this.navbarArray = navbarData;
    }
  };
</script>

<style scoped lang="scss">
  @import '~assets/scss/_mixins.scss';
ul {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding-top: 4%;
  li{
    flex: 0 1 auto;
    width: 20%;
    margin-bottom: 4%;
  }
  li>a{
    display: block;
    @include flex-content(column);
    img {
      width: 60%;
      margin-bottom: 6px;
    }
  }
}
</style>
