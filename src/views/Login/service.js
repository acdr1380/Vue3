import axios from '@/utils/request.js';

export default {
    login: params => {
        return axios({
            method: 'post',
            url: '/system/user/login',
            data: params,
        });
    },
    logout: params => {
        return axios({
            method: 'get',
            url: '/system/user',
            data: params,
        });
    },
};
