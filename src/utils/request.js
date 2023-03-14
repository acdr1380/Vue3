import axios from 'axios';
const { VITE_APP_SERVER } = import.meta.env;

// 配置头部
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const service = axios.create({
    baseURL: VITE_APP_SERVER,
    timeout: 1000 * 60,
});

// request拦截器
service.interceptors.request.use(
    config => {
        console.log('request', config);
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    res => {
        console.log('request', res);
        return res.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
