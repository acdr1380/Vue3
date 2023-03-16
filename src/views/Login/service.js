import axios from '@/utils/request.js';

function login(params) {
    return axios({
        method: 'post',
        url: '/user/login',
        data: params,
    });
}

function logout(params) {
    return axios({
        method: 'get',
        url: '/user',
        data: params,
    });
}

export default {
    login,
    logout,
};
