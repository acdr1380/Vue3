import { defineStore } from 'pinia';

export const useHomePageStore = defineStore('counter', {
    state: () => {
        return { count: 0 };
    },
    // 计算属性
    getters: {
        doubleCount: ({ count }) => count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});
