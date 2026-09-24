import NavLinks from "./nav-links";
import portal from "./portal";

export default [
  ...NavLinks,
  ...portal,

  {
    path: "/notfound",
    name: "notfound",
    meta: {
      title: "404",
      //
    },
    component: () => import("../views/notfound/404-cover"),
  },
  // start of import
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    meta: {
      title: "404",
      //
    },
    component: () => import("../views/notfound/404-cover"),
  },
];
