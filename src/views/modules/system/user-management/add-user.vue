<template>
    <el-drawer v-model="visible" :title="title">
        <div class="layout">
            <div class="container">
                <el-form :model="form" ref="formInstance" :rules="rules">
                    <el-form-item label="用户名称" prop="UserName">
                        <el-input v-model="form.UserName"></el-input>
                    </el-form-item>
                    <el-form-item label="用户账号" prop="UserAccount">
                        <el-input v-model="form.UserAccount"></el-input>
                    </el-form-item>
                    <el-form-item label="用户密码" prop="PassWord">
                        <el-input v-model="form.PassWord"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="footer">
                <el-button type="primary" :loading="loading" @click="submit"> 提交 </el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import service from './service';

// 获取props
const props = defineProps({
    title: String,
    visible: Boolean,
});
const { title, visible } = toRefs(props);

const emit = defineEmits(['handleOk']);

const PASSWORD_REQUIREMENTS_REGEX = /^(?=.*[\W_])[A-Za-z0-9\S]{6,}$/; // 正则表达式要求密码至少包含一个非字母数字字符（如：特殊字符或下划线）

//  表单实例
const formInstance = ref();
// loading
const loading = ref(false);
// 保存表单数据
const form = reactive({
    Id: '',
    UserName: '',
    UserAccount: '',
    PassWord: '',
});

// 表单校验规则
const rules = reactive({
    Id: [{ required: true, message: 'Id必填', trigger: 'blur' }],
    UserName: [
        { required: true, message: '用户名称必填', trigger: 'blur' },
        { max: 20, message: '用户名不能超过20个字符', trigger: 'blur' },
    ],
    UserAccount: [
        { required: true, message: '用户账号必填', trigger: 'blur' },
        { max: 20, message: '用户名不能超过20个字符', trigger: 'blur' },
    ],
    // 表单验证规则部分
    PassWord: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 6, max: 12, message: '密码必须为6位至12位之间', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (!PASSWORD_REQUIREMENTS_REGEX.test(value)) {
                    callback(new Error('密码必须包含至少一个特殊字符'));
                } else {
                    callback();
                }
            },
            trigger: 'blur',
        },
    ],
});

/**
 * 提交
 */
async function submit() {
    const validate = await formInstance.value.validate();
    if (validate) {
        loading.value = true;
        const { data } = await service.AddUser(form).catch(err => (loading.value = false));
        loading.value = false;
        visible.value = false;

        emit('handleOk', data);
    }
}
</script>

<style lang="scss" scope></style>
