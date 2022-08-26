import { RouteRecordRaw, useRoute } from "vue-router"
const HomepageView = () => import("../views/homepage/HomepageView.vue")
const route = useRoute()


const homepageRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "homepage",
        component: HomepageView
    }
]

export default homepageRoutes