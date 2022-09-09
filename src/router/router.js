import HomePage from "@/pages/HomePage";
import {createRouter, createWebHistory} from "vue-router";
import CharactersPage from "@/pages/CharactersPage";
import CharacterPage from "@/pages/CharacterPage";
import EpisodesPage from "@/pages/EpisodesPage";
import AboutPage from "@/pages/AboutPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/characters',
        component: CharactersPage
    },
    {
        path: '/characters/:id',
        component: CharacterPage
    },
    {
        path: '/episodes',
        component: EpisodesPage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router