<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/logo/logo.png" alt="logo" />
        </div>

        <div class="navber">
            <!-- 目前只有用户后续添加 -->
            <UserBar />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import UserBar from './user-bar.vue';
</script>

<style lang="scss" scope>
.header {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo {
        flex: 0 1 255px;
        height: 100%;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .navber {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
}
</style>
