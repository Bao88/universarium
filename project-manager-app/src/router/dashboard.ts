import { RouteRecordRaw } from "vue-router"
import { isAuthenticatedGuard } from "./guards/navigation-guards"

const DashBoardView = () => import("../views/dashboard/DashboardView.vue")

const dashboardRoutes: RouteRecordRaw[] = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoardView,
        beforeEnter: isAuthenticatedGuard
    }
]

export default dashboardRoutes