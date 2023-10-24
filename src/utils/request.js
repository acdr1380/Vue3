import.meta.env = {
    VITE_APP_TITLE: '学习测试',
    VITE_APP_SERVER: '/api',
    BASE_URL: '/',
    MODE: 'development',
    DEV: true,
    PROD: false,
    SSR: false,
};
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

        if (Code != 200) {
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
        let { message } = error;
        if (message == 'Network Error') {
            message = '后端接口连接异常';
        } else if (message.includes('timeout')) {
            message = '系统接口请求超时';
        } else if (message.includes('404')) {
            message = '未找到系统接口';
        } else {
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
