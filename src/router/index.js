import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroView from "../views/IntroView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import UnsplashView from "../views/UnsplashView.vue";
import PortView from "../views/PortView.vue";
import MovieView from "../views/MovieView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/unsplash",
    name: "unsplash",
    component: UnsplashView,
  },
  {
    path: "/port",
    name: "port",
    component: PortView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
