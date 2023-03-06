<template>
    <el-container class="layout">
        <el-header>
            <HeaderBar></HeaderBar>
        </el-header>
        <el-container>
            <el-aside>
                <Menu></Menu>
            </el-aside>
            <el-main>
                <el-scrollbar>
                    <!-- 路由缓存 -->
                    <!-- <router-view #default="{ Component, route }">
                        <KeepAlive>
                            <component :is="Component"></component>
                        </KeepAlive>
                    </router-view> -->
                    <router-view> </router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import HeaderBar from './header-bar/index.vue';
import Menu from './menu/index.vue';
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .el-header {
        border-bottom: solid 1px var(--el-menu-border-color);
    }
    .el-aside {
        border-right: solid 1px var(--el-menu-border-color);
        width: 15%;
        max-width: 250px;
        min-width: 200px;
    }
    .el-main {
        --el-main-padding: 10px;
    }
}
</style>
