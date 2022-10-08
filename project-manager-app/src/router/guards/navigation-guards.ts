import { useAuthenticationStore } from "../../stores/authentication-store"
import { NavigationGuard } from "vue-router"
import pinia from "../../stores/stores"

const { isAuthenticated } = useAuthenticationStore(pinia)

export const isAuthenticatedGuard: NavigationGuard = (to, from, next) => {
    console.log("hello")
    if (isAuthenticated) next()
    else next(false)
}