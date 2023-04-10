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
                name: 'system',
                path: '/system',
                children: [
                    {
                        path: 'user',
                        component: () => import('@/views/modules/system/user-management/index.vue'),
                    },
                    {
                        path: 'menu',
                        component: () => import('@/views/modules/system/menu-management/index.vue'),
                    },
                ],
            },
            {
                name: 'threeJs',
                path: '/threeJs',
                component: () => import('@/views/modules/threeJs/index.vue'),
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
