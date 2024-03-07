// import.meta.env = {
//     VITE_APP_TITLE: '学习测试',
//     VITE_APP_SERVER: '/api',
//     BASE_URL: '/',
//     MODE: 'development',
//     DEV: true,
//     PROD: false,
//     SSR: false,
// };
import axios from 'axios';
import { ElMessage } from 'element-plus';

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
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    // 处理接口返回的数据
    res => {
        const { Code = 200, Message, Data, Success } = res.data;

        if (!Code || Code != 200 || !Success) {
            ElMessage.error(Message);
            return Promise.reject(new Error(Message));
        } else {
            return {
                code: Code,
                message: Message,
                data: Data,
                success: Success,
            };
        }
    },

    // 处理接口报错时
    error => {
        let {
            message,
            response: { status },
        } = error;

        switch (status) {
            case 401:
                message = '用户未登录';
                break;
            case 403:
                message = '用户无权限';
                break;
            case 404:
                message = '接口不存在';
                break;
            case 405:
                message = '请求方式错误';
                break;
            case 406:
                message = '请求参数错误';
                break;
            case 408:
                message = '请求超时';
                break;
            case 500:
                message = '服务器错误';
                break;
            case 501:
                message = '网络';
                break;
            case 502:
                message = '网关错误';
                break;
            case 503:
                message = '服务不可用';
                break;
            case 504:
                message = '网络超时';
                break;
            case 505:
                message = 'http版本不支持该请求';
                break;
            default:
                message = '其他错误';
        }

        ElMessage({
            message: message,
            type: 'error',
            duration: 5 * 1000,
        });
        return Promise.reject({
            code: status,
            message: message,
            data: null,
            success: false,
        });
    }
);

export default service;
