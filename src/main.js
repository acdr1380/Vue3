import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { piniaPlugin } from '@/plugins/piniaPlugin.js';

const app = createApp(App);

// 自动导入el组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router)
    .use(createPinia().use(piniaPlugin(['globalStore'])))
    .mount('#app');
