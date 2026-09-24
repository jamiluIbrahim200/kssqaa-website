export default [
    {
        path: '/private',
        name: 'private',
        meta:{
            title:'PRIVATE SCHOOLS'
        },
         component: () => import ("../views/pages/departments/private.vue")
    },
    {
        path: '/quality',
        name:'quality',
        meta:{
            title:'QUALITY ASSURANCE'
        },
        component:() => import ("../views/pages/departments/quality.vue")
    },
    {
        path: '/education',
        name:'education',
        meta:{
            title:"EDUCATION RESEARCH"
        },
        component:() => import("../views/pages/departments/educational.vue")
    }
]