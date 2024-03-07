<template>
    <!-- 显示当前 count 和 doubleCount 的值 -->
    <div>当前count: {{ `${store.count}--${store.doubleCount}` }}</div>

    <!-- 点击按钮触发 store.increment 方法 -->
    <el-button type="primary" @click="store.increment">添加</el-button>
</template>

<script setup>
// 引入相关模块和库
import { useHomePageStore } from './store.js';
import { useGlobalStore } from '@/stores/globalStore.js';
import { ref, computed } from 'vue';
import { ElButton } from 'element-plus';

// 使用全局 store
const store = useGlobalStore();

// 创建一个 ref 数字变量 num
const num = ref(0);

// 使用 computed 计算属性，将 num 的值乘以 2
const nums = computed(() => num.value * 2);

// 定义一个方法 add，用于增加 num 的值
const add = () => num.value++;
</script>
