import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import translation from '@/i18n/translation'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/:locale?',
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
            path: '/:pathMatch(.*)*',
            redirect: {
                name: 'home'
            }
        }
    ]
})

export default router
