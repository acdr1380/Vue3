import axios from '@/utils/request.js';

/**
 * 获取所有用户
 * @returns
 */
function GetUserList() {
    return axios({
        method: 'get',
        url: '/system/user',
        data: { dd: 4 },
    });
}

/**
 * 获取所有用户
 * @returns
 */
function AddUser(params) {
    return axios({
        method: 'post',
        url: '/system/user',
        data: params,
    });
}

export default {
    GetUserList,
    AddUser,
};
