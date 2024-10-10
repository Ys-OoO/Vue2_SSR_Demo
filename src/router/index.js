import Vue from 'vue';
import Router from 'vue-router';
import Bar from '@components/Bar.vue';
import Count from '@components/Count.vue';

Vue.use(Router);

export function createRouterFactory() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior() {
            return { y: 0, behavior: 'smooth' }
        },
        routes: [
            { path: '/bar', component: Bar },
            { path: '/count', component: Count },
            { path: '/', redirect: '/count' },
        ]
    })
}