<template>
    <el-button type="primary" @click="() => (visible = true)">新增用户</el-button>

    <el-drawer v-model="visible" title="新增用户">
        <div class="layout">
            <div class="container">
                <el-form :model="form" ref="formInstance" :rules="rules">
                    <el-form-item label="用户名称">
                        <el-input v-model="form.UserName"></el-input>
                    </el-form-item>
                    <el-form-item label="用户账号">
                        <el-input v-model="form.UserAccount"></el-input>
                    </el-form-item>
                    <el-form-item label="用户密码">
                        <el-input v-model="form.PassWord"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="footer">
                <el-button type="primary" size="default" @click="submit">提交</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, reactive, toValue } from 'vue';

// 控制抽屉显示
const visible = ref(false);

//  表单实例
const formInstance = ref();

// 保存表单数据
const form = reactive({
    Id: '',
    UserName: '',
    UserAccount: '',
    PassWord: '',
    CreateDate: '',
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
    PassWord: [
        { required: true, message: '用户密码必填', trigger: 'blur' },
        {
            validator: (rule, value, callbac) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    if (ruleForm.checkPass !== '') {
                        if (!ruleFormRef.value) return;
                        ruleFormRef.value.validateField('checkPass', () => null);
                    }
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
function submit() {
    console.log('formInstance', toValue(form));
}
</script>

<style lang="scss" scope></style>
