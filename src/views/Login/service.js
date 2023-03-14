import axios from '@/utils/request.js';

function login(params) {
    return axios({
        method: 'post',
        url: '/api/user/login',
        data: params,
    });
}

function logout(params) {
    return axios({
        method: 'get',
        url: '/api/user',
        data: params,
    });
}

export default {
    login,
    logout,
};
