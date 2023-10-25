<template>
    <el-dropdown trigger="click">
        <el-button :icon="User" circle> </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>查看个人信息</el-dropdown-item>
                <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElDropdown, ElButton, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { User } from '@element-plus/icons-vue';

function loginOut() {
    console.log('ddd');
}
</script>

<style lang="scss" scope></style>
