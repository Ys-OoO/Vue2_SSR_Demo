// 客户端渲染入口
import { createAppFactory } from '@/app.js';

let { app, router } = createAppFactory();

router.onReady(() => {
    app.$mount('#app');
});