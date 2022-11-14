import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'homepage',
        path: '/homepage',
        compoent: () => import('@/views/HomePage'),
    },
    {
        name: 'login',
        path: '/login',
        compoent: () => import('@/views/Login'),
    },
    {
        path: '*',
        redirect: 'redirect',
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
