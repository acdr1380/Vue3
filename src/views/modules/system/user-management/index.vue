<template>
    <div class="layout">
        <div class="header">
            <div class="right">
                <el-button type="primary" size="default" @click="">新增</el-button>
            </div>
        </div>
        <div class="container">
            <el-table border v-loading="loading" :data="tableData">
                <el-table-column prop="userName" label="用户名" width="180" />
                <el-table-column prop="userAccount" label="账号名称" width="180" />
                <el-table-column prop="createDate" label="创建时间" />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, effect } from 'vue';
import service from './service';

let tableData = reactive([]);
let loading = ref(false);

effect(() => {
    loading.value = true;
    service
        .getUserList()
        .then(({ data = [] }) => {
            loading.value = false;
            tableData = [...data];
        })
        .catch(err => (loading.value = false));
}, []);
</script>

<style lang="scss" scope></style>
