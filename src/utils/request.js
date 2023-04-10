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
    res => {
        const { code = 200, message } = res.data;

        if (code != 200) {
            ElMessage.error(message);
            return Promise.reject(new Error(message));
        } else {
            return res.data;
        }
    },
    error => {
        let { message } = error;
        if (message == 'Network Error') {
            message = '后端接口连接异常';
        } else if (message.includes('timeout')) {
            message = '系统接口请求超时';
        } else if (message.includes('Request failed with status code')) {
            message = '系统接口异常';
        }

        ElMessage({
            message: message,
            type: 'error',
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);

export default service;
