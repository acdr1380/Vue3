<template>
    <el-input type="text" v-model="value" @input="input" />
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
const props = defineProps({
    modeValue: {
        type: String,
        default: '',
    },
});

// const { modeValue, title } = reactive(props);
const emit = defineEmits(['update:modeValue', 'input']);

const value = ref(props.title);

watch(value, (newValue, preValue) => {
    emit('update:modeValue', newValue);
});

// 使用函数返回值监听props消除警告
watch(
    () => props.modeValue,
    (newValue, preValue) => {
        value.value = newValue;
    }
);

const input = value => {
    emit('input', value);
};
</script>

<style lang="scss" scope></style>
