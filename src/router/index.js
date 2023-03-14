import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // 重定向
    {
        path: '',
        redirect: 'login',
    },
    {
        path: '',
        redirect: 'homepage',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/homepage',
                name: 'homepage',
                component: () => import('@/views/home-page/index.vue'),
            },

            {
                path: '/system/user',
                name: 'user',
                component: () => import('@/views/modules/system/userManagement/index.vue'),
            },
            {
                path: '/system/menu',
                name: 'menu',
                component: () => import('@/views/modules/system/menuManagement/index.vue'),
            },

            {
                path: '/:pathMatch(.*)*',
                component: () => import('@/views/error-page/index.vue'),
            },
        ],
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },

    // 配置错误路由跳转
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error-page/index.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
