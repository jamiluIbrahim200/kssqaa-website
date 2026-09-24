export default[
   {
    path: "/history",
    name: "history",
    meta: {
      title: "INTRODUCTION",
    },
    component: () => import("../views/pages/about/introduction.vue"),
   },
   {
    path: "/services",
    name: "services",
    meta:{
      title:"OUR SERVICES"
    },
    component: () => import("../views/pages/about/services.vue")
   },
   {
    path: '/team',
    name: 'team',
    meta:{
      title:'OUR TEAM'
    },
    component: () => import("../views/pages/about/team.vue")
   },
   {
    path: '/mandate',
    name: 'mandate',
    meta: {
      title:"MANDATE",
    },
    component:() => import("../views/pages/about/mandate.vue")
   },
   {
    path: '/stakeholders',
    name:'stakeholders',
    meta:{
      title:'STAKEHOLDERS'
    },
    component: () => import("../views/pages/about/stakeholders.vue")
   },
]