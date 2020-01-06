import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {timeout: TIMEOUT}).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.slider;
    } else {
      throw new Error('数据获取失败，请稍候重试');
    }
  }).catch(err => {
    if (err) {
      console.log(err);
    };
    return [{
      linkUrl: 'https://www.imooc.com',
      picUrl: require('../assets/img/404.png')
    }];
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 4000);
    });
  });
};
