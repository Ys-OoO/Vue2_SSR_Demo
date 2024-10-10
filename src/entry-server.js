// 服务端渲染入口
import createAppFactory from '@/app.js';

/**
 * * 服务端入口只需要将创建的实例转交给对应接口进行渲染
 */
export default () => {
    let { app } = createAppFactory();
    return app;
}