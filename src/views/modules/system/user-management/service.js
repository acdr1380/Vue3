import axios from '@/utils/request.js';

/**
 * 获取所有用户
 * @returns 
 */
function getUserList() {
    return axios({
        method: 'get',
        url: '/system/user',
        data: {"dd": 4},
    });
}

/**
 * 获取所有用户
 * @returns 
 */
 function addUser(params) {
    return axios({
        method: 'post',
        url: '/system/user',
        data: params,
    });
}


export default {
    getUserList,
    addUser
};
