import store from '.././vuex/index'
import router from '.././router/index'
import axios from 'axios'
/* eslint-disable */
Vue.prototype.$axios = axios;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    
    //加载动画
    store.dispatch('LOADING',true);

    Object.assign(config,{data:Vue.prototype.$qs(config.data)});

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data

    //加载动画
    store.dispatch('LOADING',false);
    // 数据处理
    if(!response.data.success) {
        error({...response.data});  
        return Promise.reject(response.data)
    }

    return Promise.resolve(response.data)

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

const error = ({error_code:code,msg}) => {
    //登录态失效，清除token，记录当前页路由，返回登录页
    if(code === 200){
        store.commit('LOGINOUT');
        router.push({
            path:'/login',
            query:{
                redirect:router.currentRoute.fullPath
            }
        })
    } else {
        Vue.$vux.toast.text(msg, 'middle');
    }
    
}
export default axios;