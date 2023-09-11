<template>
    <div><el-input type="text" v-model="str" @chaneg="change" /></div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, toRaw } from 'vue';

// props
const props = defineProps(['modelValue', 'message']);

// emit
const emit = defineEmits(['update:modeValue', 'input']);

const str = ref(props.message);

watch(
    () => props.modelValue,
    () => {
        console.log(toRaw(props));
    }
);

/**
 * 值改变事件
 */
function change(v) {
    emit('update:modeValue', v);
}
</script>

<style lang="scss" scope></style>
