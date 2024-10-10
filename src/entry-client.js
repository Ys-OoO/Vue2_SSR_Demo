// 客户端渲染入口
import { createAppFactory } from "@/app.js";
import Vue from "vue";

let { app, router, store } = createAppFactory();

// 使用混入，当路由组件的params改变时主动拉取数据
Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      })
        .then(next)
        .catch(next);
    } else {
      next();
    }
  },
});

// 首屏时，将预取的数据同步到客户端的store中
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  // 路由切换之前，预取需要的数据
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    // 进行对比，过滤出客户端渲染的路由组件
    const csrComponents = matched.filter((component, i) => {
      return prevMatched[i] !== component;
    });

    if (!csrComponents.length) {
      return;
    }

    // 预取数据，这里是客户端逻辑，类似于ajax
    Promise.all(
      csrComponents.map((component) => {
        if (component.asyncData) {
          return component.asyncData({ store, route: to });
        }
      })
    )
      .then(next)
      .catch(next);
  });
  app.$mount("#app");
});
