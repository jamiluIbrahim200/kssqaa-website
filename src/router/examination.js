export default [
    {
        path:'/examination',
        name:'examination',
        meta:{
            title:'EXAMINATION'
        },
        component:() => import("../views/pages/examinations/exam.vue")
    }
]