import { defineStore } from "pinia";

export const useAuthenticationStore = defineStore("authentication", () => {
    const isAuthenticated = $ref(false)

    return { isAuthenticated }
})