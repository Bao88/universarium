import { createRouter, createWebHistory } from "vue-router";
import dashboardRoutes from "./dashboard";
import homepageRoutes from "./homepage";
console.log(import.meta.env)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...homepageRoutes,
        ...dashboardRoutes
    ]
})

export default router