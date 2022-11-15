import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'homepage',
        path: '/homepage',
        component: () => import('@/views/HomePage/index.vue'),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
    },
    {
        path: '',
        redirect: 'login',
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/ErrorPage/index.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
