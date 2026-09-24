import aboutLinks from "./aboutLinks";
import department from "./department";
import resources from "./resoursces";
import schools from "./schools";
import examination from "./examination";
import contact from "./contact";
import news from "./news";
export default [
  ...aboutLinks,
  ...department,
  ...resources,
  ...schools,
  ...examination,
  ...contact,
  ...news,
  {
    path: "/",
    name: "home",
    meta: {
      title: "HOME",
    },
    component: () => import("../views/pages/home/index.vue"),
  },

];
