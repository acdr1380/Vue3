<template>
    <div class="layout">
        <div class="header">
            <div class="right">
                <AddUser title="123" @handleOk="handleOk"></AddUser>
                <el-button type="primary" @click="deleteUser">删除</el-button>
            </div>
        </div>
        <div class="container">
            <el-table
                highlight-current-row
                v-loading="loading"
                :border="true"
                :data="tableData"
                @row-click="row => (actived = row)"
            >
                <el-table-column prop="UserName" label="用户名" width="180" />
                <el-table-column prop="UserAccount" label="账号名称" width="180" />
                <el-table-column prop="CreateDate" label="创建时间" />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, effect, toValue } from 'vue';
import service from './service';
import AddUser from './add-user.vue';

const tableData = reactive([]);

const loading = ref(true);
const actived = ref();

/**
 * @description 获取用户列表
 */
effect(async () => {
    loading.value = true;
    const { data = [] } = await service.GetUserList().catch(() => (loading.value = false));
    loading.value = false;
    tableData.push(...data);
}, []);

/**
 * @description 删除用户
 */
const deleteUser = () => {
    loading.value = true;
    service
        .DeleteUser(toValue(actived).Id)
        .then(() => {
            loading.value = false;
            tableData = tableData.filter(item => item.Id !== actived.value.Id);
        })
        .catch(() => (loading.value = false));
};

/**
 * @param {SysUser} user 用户信息
 * @description 新增用户回调
 */
const handleOk = user => {
    console.log(user);
    tableData.push(user);
};
</script>

<style lang="scss" scope></style>
