<template>
    <input type="text" :value="title" @input="input" />
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
    modeValue: {
        type: String,
    },

    title: {
        type: String,
    },
});
const emit = defineEmits(['update:modeValue', 'update:title']);

const value = ref('');

watch(value, newValue => {
    emit('update:modeValue', newValue);
    emit('update:title', newValue);
});

watch(props.modeValue, newValue => {
    value.value = newValue;
});

const input = event => {
    emit('update:title', event.target.value);
};
</script>

<style lang="scss" scope></style>
