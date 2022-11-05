import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViews.vue'
import quiz from '../views/QuizViews.vue'
import sport from '../views/SportViews.vue'



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
            path: '/pub',
            name: 'pub',
            component: quiz
        },
        {
            path: '/meteo',
            name: 'meteo',
            component: quiz
        },
        {
            path: '/culture',
            name: 'culture',
            component: quiz,
        }

    ]
})

export default router