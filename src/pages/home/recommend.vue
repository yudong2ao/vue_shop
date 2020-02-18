<template>
  <div>
    <h2>热卖推荐</h2>
    <loading  class="recommend-loading" v-if="!recommends.length"></loading>
    <ul v-else>
      <li v-for="(item, index) in recommends" :key="index">
        <router-link :key="$route.fullPath" :to="{name: 'home-product', params: {id: item.baseinfo.itemId}}">
          <p class="imgbox" v-lazy:background-image="item.baseinfo.picUrl" :style="{background: `no-repeat center center/cover`}"></p>
          <p class="recommend-title">{{item.name.title}}</p>
          <p class="recommend-origPrice"><del>￥{{item.price.origPrice}}</del></p>
          <p>
            <span class="recommend-price">￥<strong>{{item.price.actPrice}}</strong></span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import loading from '@/base/loading';
  import { getHomeRecommend } from '@/api/home';
  export default {
    name: 'recommend',
    data() {
      return {
        recommends: [],
        curPage: 1,
        totalPage: 1
        /* arr01: require('./img/1e71ad75a044d1867ca1deac3da91985.jpg'),
        arr02: require('./img/b4c83f152d8d911113a05bd6f748658d.jpg') */
      };
    },
    components: {
      loading
    },
    methods: {
      getRecommend: function () {
        if (this.curPage > this.totalPage) {
          return;
        }
        getHomeRecommend(this.curPage).then(data => {
          if (data) {
            console.log(data);
            this.curPage++;
            this.totalPage = data.totalPage;
            this.recommends = this.recommends.concat(data.itemList);
            this.$emit('load', this.recommends);
          }
        });
      }
    },
    created() {
      this.getRecommend();
      /* this.recommends[0].baseinfo.picUrl = this.arr01;
      this.recommends[1].baseinfo.picUrl = this.arr02; */
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/scss/_mixins.scss";
  @import "~assets/scss/_list.scss";
  .recommend-loading{
    padding-top: 90px;
  }
  h2{
    $test-var:18px;
    position: relative;
    text-align: center;
    padding: 10px 0;
    font-size: $font-size-l;
    &::after,
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      width: 40%;
      height: 1px;
      background-color: #fff;
    }
    &::before{
      left: 1%;
      right: auto;
    }
    &::after{
      left: auto;
      right: 1%;
    }
  }
  ul{
    @include flex-justify();
    flex-wrap: wrap;
    li{
      p{
        padding: 0 6px;
      }
      width: 49%;
      padding: 0%;
      margin-bottom: 8px;
      background-color: #fff;
      .imgbox{
        width: 100%;
        margin-bottom: 6px;
        padding-top: 100%;
        /*background-size: cover !important;*/
      }
      .recommend-title{
        @include multiline-ellipsis();
        line-height: 16px;
        height: 32px;
      }
      .recommend-origPrice{
        color: #ccc;
        padding: {
          top: 8px;
          bottom: 8px;
        };
      }
        a>p:last-child{
          @include flex-justify;
          .recommend-price{
            color: red;
            strong{
              font-size: 20px;
            }
          }
          padding-bottom: 6px;
        }
    }
  }
</style>
