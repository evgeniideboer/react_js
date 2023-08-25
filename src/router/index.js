import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", component: About },
  { path: "/posts", component: Posts },
  { path: "/posts/:id", component: PostIdPage },
  { path: "/login", component: Login },
];

export const publicRoutes = [
  { path: "/about", component: About },
  { path: "/login", component: Login },
];
