import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import translation from '@/i18n/translation'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: `${import.meta.env.BASE_URL}/:locale?`,
            component: RouterView,
            beforeEnter: translation.routeMiddleware,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                }
            ]
        },
        {
            path: `${import.meta.env.BASE_URL}/:pathMatch(.*)*`,
            redirect: {
                name: 'home'
            }
        }
    ]
})

export default router
