import Vue from 'vue';
import Router from 'vue-router';
import Bar from '@components/Bar.vue';
import Foo from '@components/Foo.vue';

Vue.use(Router);

export function createRouterFactory() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior() {
            return { y: 0 }
        },
        routes: [
            { path: '/bar', component: Bar },
            { path: '/foo', component: Foo },
            { path: '/', redirect: '/foo' },
        ]
    })
}