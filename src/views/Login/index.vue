<template>
    <div class="login-wrap">
        <div class="login-from">
            <div class="title">Vue3学习</div>
            <el-form
                ref="formInstance"
                :model="form"
                :rules="rules"
                size="default"
                @keydown.native.enter="onSubmit"
            >
                <el-form-item prop="userAccount">
                    <el-input v-model="form.userAccount" placeholder="请输入账号">
                        <template #prefix>
                            <el-icon><UserFilled /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="passWord">
                    <el-input
                        type="password"
                        show-password
                        v-model="form.passWord"
                        placeholder="请输入密码"
                    >
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item style="margin-top: 10px">
                    <el-button
                        type="primary"
                        :loading="btnLoading"
                        style="width: 100%"
                        @click="onSubmit"
                    >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { UserFilled, Lock } from '@element-plus/icons-vue';
import service from './service';

const router = useRouter();
const form = reactive({
    userAccount: 'admin',
    passWord: '123456',
});

const formInstance = ref();
const btnLoading = ref(false);

// 表单验证
const rules = reactive({
    userAccount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    passWord: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度不能小于6位大于10位', trigger: 'change' },
    ],
});

// 初始化
onMounted(() => {});

// 卸载
onUnmounted(() => {});

/**
 * 提交
 */
const onSubmit = async () => {
    try {
        const valid = await formInstance.value.validate();
        if (valid) {
            // 设置按钮加载状态
            btnLoading.value = true;
            const loginResponse = await service.login(form);
            // 校验登录响应
            if (loginResponse?.success) {
                // 登录成功，跳转到首页
                router.push('/homepage');
            } else {
                console.log('登录失败');
            }
        }
    } catch (err) {
        console.error('发生错误：', err);
    } finally {
        // 无论成功或失败，重置按钮加载状态
        btnLoading.value = false;
    }
};
</script>

<style lang="scss" scoped>
.login-wrap {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: url('@/assets/images/loginBackgroundImage.jpg') no-repeat center center fixed;
    background-size: cover;
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
