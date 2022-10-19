import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddArticle from "../views/AddArticle.vue";
import ArticleDetail from "../views/ArticleDetail";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addArticle",
    name: "addArcticle",
    component: AddArticle,
  },
  {
    path:"/articleDetail/:id",
    name:"articleDetail",
    component: ArticleDetail,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
