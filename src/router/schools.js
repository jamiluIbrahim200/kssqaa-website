export default [
    {
        path: '/process',
        name: 'process',
        meta:{
            title:'SCHOOL PROCESS'
        },
        component:() => import ("../views/pages/schools/process.vue")
    },
    {
        path: '/validation',
        name:'validation',
        meta:{
            title:'SCHOOL RE - VALIDATION'
        },
        component:() => import("../views/pages/schools/validation.vue")
    }
]