<template>
    <div>当前count: {{ `${store.count}--${store.doubleCount}` }}</div>
    <el-button type="primary" @click="store.increment">添加</el-button>
</template>

<script setup>
import { useHomePageStore } from './store.js';
import { useGlobalStore } from '@/stores/globalStore.js';
import { ref, computed } from 'vue';
const store = useGlobalStore();
const num = ref(0);

const nums = computed(() => num.value * 2);
const add = () => num.value++;
</script>
