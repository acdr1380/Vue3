<script setup>
import { useHomePageStore } from './store.js';
const store = useHomePageStore();
</script>

<template>
    <div>当前count: {{ store.count }}</div>
    <el-button type="primary" @click="store.increment">添加</el-button>
</template>
