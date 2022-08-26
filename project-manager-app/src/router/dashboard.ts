import { RouteRecordRaw } from "vue-router"

const DashBoardView = () => import("../views/dashboard/DashboardView.vue")

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoardView
    }
]

export default dashboardRoutes