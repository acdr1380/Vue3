<template>
    <div>菜单管理</div>
    <div>
        {{ title }}:
        <el-input v-model="title" style="width: 200px"></el-input>
    </div>

    <Test v-model="title" :message="message"></Test>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElInput } from 'element-plus';
import Test from './test.vue';

const title = ref('123');
const message = ref('999');
</script>

<style lang="scss" scope></style>
