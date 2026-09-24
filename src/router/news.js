export default [
  {
    path: "/news/:id",
    name: "indexDetails",
    component: () => import("../views/pages/news/index.vue"),
    props: true,
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/pages/home/newsCard.vue"),
    props: true,
  },
];
