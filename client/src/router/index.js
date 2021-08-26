import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Films from "../views/Films.vue";
import Reviews from "../views/Reviews.vue";
import Members from "../views/Members.vue";
import Favourite from "../views/Favourite.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import LoggedInHome from "../views/LoggedInHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/hello",
    name: "LoggedInHome",
    component: LoggedInHome
  },
  {
    path: "/films",
    name: "Films",
    component: Films
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews
  },
  {
    path: "/members",
    name: "Members",
    component: Members
  },
  {
    path: "/favouritefilmoftheyear",
    name: "Favourite",
    component: Favourite
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
