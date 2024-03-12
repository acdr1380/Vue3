import axios from '@/utils/request.js';

export default {
    /**
     * 获取用户列表
     */
    GetUserList: () => {
        return axios({
            method: 'get',
            url: '/system/user',
        });
    },

    /**
     * 添加用户
     */
    AddUser: params => {
        return axios({
            method: 'post',
            url: '/system/user',
            data: params,
        });
    },

    /**
     * 删除用户
     */
    DeleteUser: params => {
        return axios({
            method: 'delete',
            url: `/system/user/${params}`,
        });
    },
};
