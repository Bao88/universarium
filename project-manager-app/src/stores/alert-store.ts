/**
 * A store which handles different notifications / pop up messages(dialog)
 * depending how critical they are.
 */

import { defineStore } from "pinia";
import { computed } from "vue";
import { Alert } from "../types/alert-types";

export const useAlertStore = defineStore("alert", () => {
    const alerts: Record<string, Alert> = $ref({})

    const addAlert = (alert: Alert) => {
        alerts[alert.id] = alert
    }

    const removeAlert = (id: string) => {
        delete alerts[id]
    }

    const notifications = $computed(() => {
        return Object.values(alerts).filter(alert => alert.checked && alert.type === "NOTIFICATION")
    })

    const dialogs = $computed(() => {
        return Object.values(alerts).filter(alert => !alert.checked && alert.type === "DIALOG")
    })

    return { addAlert, removeAlert, notifications, dialogs }
})