export default [
    {
        path:'/books',
        name:'books',
        meta:{
            title:'RECOMMENDED TEXT BOOKS'
        },
        component:() => import("../views/pages/resources/books.vue")
    },
    {
        path:'/elearning',
        name:'elearning',
        meta:{
            title:'E LEARNING'
        },
        component:() => import("../views/pages/resources/elearning.vue")
    },
    {
        path:'/learningAid',
        name:'learningAid',
        meta:{
            title:'LEARNING AID'
        },
        component:() => import("../views/pages/resources/learning-aid.vue")
    },
    {
        path:'/learningSupport',
        name:'learningSupport',
        meta:{
            title:'LEARNING SUPPORT'
        },
        component:() => import("../views/pages/resources/leaning-support.vue")
    },
    {
        path:'/guide',
        name:'guide',
        meta:{
            title:'ANNEWAL RENEWAL LICENCE GUIDE'
        },
        component:() => import("../views/pages/resources/guide.vue")
    },
    {
        path:'/edu',
        name:'edu',
        meta:{
            title:'EDUCATION POLICIES'
        },
        component:() => import("../views/pages/resources/edu-monitor.vue")
    }
]