import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from "@/views/ProjectView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
    ]
})

export default router
