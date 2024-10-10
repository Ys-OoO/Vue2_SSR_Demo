import Vue from "vue";
import App from "./App.vue";
import { createRouterFactory } from "./router";

/**
 * * 每个请求都需要创建一个新的Vue实例：因为不同用户应该获取一个属于自己的Vue实例来渲染，而不是所有用户共用一个
 * * 工厂模式 createAppFactory
 */
export function createAppFactory() {
  const router = createRouterFactory();
  const app = new Vue({
    router,
    render: h => h(App)
  })

  return {
    app,
    router
  }
}
