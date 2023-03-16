<template>
    <div>菜单管理</div>
    <div>{{ title }}</div>
    <Test v-model="title" @input="input"></Test>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Test from './test.vue';

const title = ref('123');
console.log(import.meta.env);
console.log(import.meta.url);

const input = event => {
    console.log('input', event);
};
</script>

<style lang="scss" scope></style>
