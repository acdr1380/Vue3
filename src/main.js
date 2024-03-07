import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { piniaPlugin } from '@/plugins/piniaPlugin.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 全局自定义样式
import '@/assets/global-style.scss';
// 重写element的样式
import '@/assets/rewrite-style.scss';

const app = createApp(App);
// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router)
    .use(ElementPlus)
    .use(createPinia().use(piniaPlugin(['globalStore'])))
    .mount('#app');
