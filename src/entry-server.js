// 服务端渲染入口
import { createAppFactory } from "@/app.js";

/**
 * * 服务端入口只需要将创建的实例转交给对应接口进行渲染
 */
export default (context) => {
  return new Promise((resolev, reject) => {
    let { app, router, store } = createAppFactory();
    const url = context.url;

    // 访问的URL所对应的路由
    const { fullPath } = router.resolve(url).route;

    if (fullPath !== url) {
      // 路径不匹配
      return reject({ url: fullPath });
    }

    // 设置服务端路由 router 的位置
    router.push(url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      // 预取store状态
      Promise.all(
        matchedComponents.map((component) => {
          if (!component) return;
          const { asyncData } = component;
          return asyncData && asyncData({ store, route: router.currentRoute });
        })
      )
        .then(() => {
          // 将预取的新状态设置到context中，renderToString后续会将其序列化到window.__INITIAL_STATE__
          context.state = store.state;
          resolev(app);
        })
        .catch(reject);
    }, reject);
  });
};
