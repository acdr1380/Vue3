import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '',
        redirect: 'homepage',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'homepage',
                name: 'homepage',
                component: () => import('@/views/HomePage/index.vue'),
            },
            {
                path: '/:pathMatch(.*)*',
                component: () => import('@/views/ErrorPage/index.vue'),
            },
        ],
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
    },
    // 重定向
    {
        path: '',
        redirect: 'login',
    },
    // 配置错误路由跳转
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/ErrorPage/index.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
