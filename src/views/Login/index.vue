<script setup>
import { ref, reactive } from 'vue';
const form = reactive({
    UserAccount: '',
    PassWord: '',
});

const formIntance = ref();

const rules = reactive({
    UserAccount: [{ required: true, message: '请输入账号', trigger: 'change' }],
    PassWord: [{ required: true, message: '请输入密码', trigger: 'b' }],
});

// 提交
const onSubmit = () => {
    console.log('asd', formIntance);
};
</script>

<template>
    <div class="login-wrap">
        <div class="login-from">
            <div class="title">Vue3学习</div>
            <el-form :model="form" ref="formIntance" :rules="rules" size="default">
                <el-form-item>
                    <el-input v-model="form.UserAccount" placeholder="请输入账号">
                        <template #prefix>
                            <el-icon><UserFilled /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        type="password"
                        show-password
                        v-model="form.PassWord"
                        placeholder="请输入密码"
                    >
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item style="margin-top: 10px">
                    <el-button type="primary" style="width: 100%" @submit="onSubmit">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-wrap {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: url('/public/images/loginBackgroundImage.jpg') no-repeat center;
    background-size: 1920px 1080px;
    .login-from {
        width: 400px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 5px;
        padding: 10px;

        .title {
            height: 60px;
            line-height: 60px;
            text-align: center;
        }
    }
}
</style>
