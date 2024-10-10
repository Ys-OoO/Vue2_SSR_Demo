import Vue from "vue";
import App from "./App.vue";
import { createRouterFactory } from "./router";
import { createStoreFactory } from "./store";
import { sync } from "vuex-router-sync";

/**
 * * 每个请求都需要创建一个新的Vue实例：因为不同用户应该获取一个属于自己的Vue实例来渲染，而不是所有用户共用一个
 * * 工厂模式 createAppFactory
 */
export function createAppFactory() {
  const router = createRouterFactory();
  const store = createStoreFactory();

  // 同步路由状态到store中
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });

  return {
    app,
    router,
    store,
  };
}
