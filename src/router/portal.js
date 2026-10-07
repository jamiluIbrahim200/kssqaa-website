export default [
  {
    path: "/dg",
    name: "dg",
    meta: {
      title: "DG",
    },
    component: () => import("@/components/dg.vue"),
  },
  {
    path:"/portal",
    name:"portal",
    meta:{
      title:"Portal"
    },
    component: () => import("@/components/portals.vue"),
  },
  {
    path:"/examiner-policy",
    name:"examiner",
    meta:{
      title:"EXAMINER"
    },
    component: () => import("@/components/examiner.vue"),
  },
  {
    path:"/kssqaa-erp-policy",
    name:"erp-policy",
    meta:{
      title:"ERP POLICY"
    },
    component: () => import("@/components/erp-policy.vue"),
  }
];
