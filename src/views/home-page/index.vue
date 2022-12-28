<template>
    <div>当前count: {{ `${num}--${nums}` }}</div>
    <el-button type="primary" @click="add">添加</el-button>
</template>

<script setup>
import { useHomePageStore } from './store.js';
import { ref, computed } from 'vue';
const store = useHomePageStore();
const num = ref(0);

const nums = computed(() => num.value * 2);

const add = () => num.value++;
</script>
