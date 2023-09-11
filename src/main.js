import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { piniaPlugin } from '@/plugins/piniaPlugin.js';

// 全局自定义样式
import '@/assets/global-style.scss';
// 重写element的样式
import '@/assets/rewrite-style.scss';

const app = createApp(App);
// 自动导入el组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router)
    .use(ElementPlus)
    .use(createPinia().use(piniaPlugin(['globalStore'])))
    .mount('#app');
