import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/home',
    component: () => import('@/pages/home'),
    children: [{
      path: 'product/:id',
      component: () => import('@/pages/product')
    }, {
      path: 'search/:id',
      component: () => import('@/pages/search')
    }]
  }, {
    path: '/category',
    component: () => import('@/pages/category')
  }, {
    path: '/cart',
    component: () => import('@/pages/cart')
  }, {
    path: '/personal',
    component: () => import('@/pages/personal')
  }, {
    path: '*',
    redirect: '/Home'
  }]
});
