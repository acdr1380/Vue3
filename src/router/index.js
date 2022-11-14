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
        redirect: 'homepage',
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
