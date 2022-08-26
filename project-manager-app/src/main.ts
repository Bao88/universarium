import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createI18n } from 'vue-i18n'
import router from "./router/routes"

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import './style.css'
import App from './App.vue'

const i18n = createI18n({
    locale: "no",
    messages: {
        no: {
            "hi": "hei {test}"
        },
        eng: {
            "hi": "hi {test}"
        }
    }
})

const app = createApp(App)
app.use(i18n)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    brand: {
        primary: '#1468de',
        secondary: '#26a659',
        accent: '#3c4242',

        dark: '#1d1d1d',
        'dark-page': '#121212',

        positive: '#21BA45',
        negative: '#c20000',
        info: '#31CCEC',
        warning: '#F2C037'
    }
})
app.use(router)
app.mount('#app')
