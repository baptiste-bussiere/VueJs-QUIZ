import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViews.vue'
import marques from '../views/MarquesViews.vue'
import sport from '../views/SportViews.vue'
import nature from '../views/NatureViews.vue'
import voiture from '../views/VoitureViews.vue'




const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/sport',
            name: 'sport',
            component: sport
        },
        {
            path: '/marques',
            name: 'marques',
            component: marques
        },
        {
            path: '/nature',
            name: 'nature',
            component: nature
        },
        {
            path: '/voiture',
            name: 'voiture',
            component: voiture,
        }

    ]
})

export default router