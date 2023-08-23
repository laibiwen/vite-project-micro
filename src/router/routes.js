const Home = () => import("@/App.vue");
const NotFound = () => import("@/pages/NotFound.vue");

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/subpage",
    component: Home,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
