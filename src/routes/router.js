import Vue from 'vue'
import VueRouter from "vue-router";
let Home = () => import('../components/Home');
let Order = () => import('../components/Order');

Vue.use(VueRouter);


let routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: { requiresAuth: false },
    },
    {
        path: '/order',
        component: Order,
        name: 'Order',
        meta: { requiresAuth: false },
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes: routes
});

export default router;