<template>
    <div ref="wrap" class="wrap"></div>
</template>

<script setup>
import { AxesHelper, Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { ref, reactive, onMounted } from 'vue';
const wrap = ref();

onMounted(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        45,
        wrap.value.offsetWidth / wrap.value.offsetHeight,
        0.1,
        1000
    );
    camera.position.set(20, 30, 40);
    camera.lookAt(scene.position);

    const axes = new AxesHelper(20);
    scene.add(axes);

    const renderer = new WebGLRenderer();
    renderer.setClearColor(new Color(0xeeeeee));
    renderer.setSize(wrap.value.offsetWidth, wrap.value.offsetHeight);
    wrap.value.appendChild(renderer.domElement);

    renderer.render(scene, camera);
});
</script>

<style lang="scss" scope>
.wrap {
    height: 100%;
    width: 100%;
}
</style>
