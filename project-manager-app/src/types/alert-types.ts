type AlertType = "DIALOG" | "NOTIFICATION"

export class Alert {
    type: AlertType
    message: string
    date = new Date()
    checked = false

    constructor(message: string, type?: AlertType) {
        this.message = message
        this.type = type || "NOTIFICATION"
    }

    get id() {
        return this.date.getTime().toString()
    }
}