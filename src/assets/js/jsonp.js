import jsonp from 'jsonp';
let totalParams = (array) => {
  let totalString = '';
  let res = '';
  for (let key in array) {
    totalString += key + '=' + array[key] + '&';
    res = totalString.slice(0, totalString.length - 1);
  }
  return res;
};
export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + totalParams(data);
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
