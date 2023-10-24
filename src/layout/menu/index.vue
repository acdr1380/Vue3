<template>
    <el-scrollbar>
        <el-menu :router="true">
            <el-menu-item index="/homepage">
                <el-icon><icon-menu /></el-icon>
                <template #title>首页</template>
            </el-menu-item>
            <el-sub-menu index="/system">
                <template #title>
                    <el-icon><setting /></el-icon>
                    <span>系统设置</span>
                </template>
                <el-menu-item index="/system/user">用户管理</el-menu-item>
                <el-menu-item index="/system/menu">菜单管理</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/threeJs">
                <el-icon><icon-menu /></el-icon>
                <template #title>ThreeJs演示</template>
            </el-menu-item>
            <el-menu-item index="/3">
                <el-icon><document /></el-icon>
                <template #title>测试功能1</template>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import { ref } from 'vue';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.el-menu {
    border: none;
}
</style>
