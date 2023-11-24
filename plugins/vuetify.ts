import '@mdi/font/css/materialdesignicons.css'
import '@/assets/scss/main.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
import { md3 } from 'vuetify/blueprints'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: colors.grey.darken4,
                        background: colors.grey.lighten4,
                        surface: colors.grey.lighten5
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        primary: colors.yellow.darken1,
                        background: colors.grey.darken4,
                        surface: colors.grey.darken4
                    }
                }
            },
        },
        icons: {
            defaultSet: 'mdi',
        },
        blueprint: md3,
        display: {
            mobileBreakpoint: 'sm',
            thresholds: {
                xs: 0,
                sm: 340,
                md: 540,
                lg: 800,
                xl: 1280,
            },
        },
    })
    app.vueApp.use(vuetify)
})
