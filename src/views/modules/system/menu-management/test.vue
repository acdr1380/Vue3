<template>
    <div><el-input type="text" v-model="str" @input="input" /></div>
</template>

<script setup>
import { ref, watch, defineEmits, toRaw } from 'vue';

// props
const props = defineProps(['modelValue', 'message']);

// emit
const emit = defineEmits(['update:modeValue', 'input']);

const str = ref(props.modelValue);

watch(
    () => props.modelValue,
    () => (str.value = props.modelValue)
);

/**
 * 值改变事件
 */
function input(v) {
    emit('update:modeValue', v);
}
</script>

<style lang="scss" scope></style>
