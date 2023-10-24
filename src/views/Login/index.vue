<template>
    <div class="login-wrap">
        <div class="login-from">
            <div class="title">Vue3学习</div>
            <el-form
                ref="formIntance"
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
import service from './service';

const router = useRouter();
const form = reactive({
    userAccount: 'admin',
    passWord: '123456',
});

const formIntance = ref();
const btnLoading = ref(false);

const rules = reactive({
    userAccount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    passWord: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度不能小于6位大于10位', trigger: 'change' },
    ],
});

// 初始化
onMounted(() => {
    window.addEventListener('keydown', onSubmit);
});

// 清理绑定事件
onUnmounted(() => {
    window.removeEventListener('keydown', onSubmit);
});

/**
 * 提交
 */
const onSubmit = async () => {
    const vaild = await formIntance.value.validate().catch(e => console.log(e));
    if (vaild) {
        btnLoading.value = true;
        const { success } = await service.login(form).catch(() => {
            btnLoading.value = false;
        });
        if (success) {
            router.push('/homepage');
        }
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
