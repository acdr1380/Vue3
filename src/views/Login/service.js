import axios from '@/utils/request.js';

function login(params) {
    return axios({
        method: 'post',
        url: '/system/user/login',
        data: params,
    });
}

function logout(params) {
    return axios({
        method: 'get',
        url: '/system/user',
        data: params,
    });
}

export default {
    login,
    logout,
};
