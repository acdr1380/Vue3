<template>
    <div class="layout">
        <div class="header">
            <div class="right">
                <AddUser></AddUser>
            </div>
        </div>
        <div class="container">
            <el-table border v-loading="loading" :data="tableData">
                <el-table-column prop="UserName" label="用户名" width="180" />
                <el-table-column prop="UserAccount" label="账号名称" width="180" />
                <el-table-column prop="CreateDate" label="创建时间" />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, effect } from 'vue';
import service from './service';
import AddUser from './add-user.vue';

let tableData = reactive([]);
let loading = ref(false);

effect(async () => {
    loading.value = true;
    const { data = [] } = await service.GetUserList().catch(() => (loading.value = false));
    loading.value = false;
    tableData = [...data];
}, []);
</script>

<style lang="scss" scope></style>
