// 引入路由组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import MessagesDetail from '../pages/MessagesDetail.vue'

export default[
    {
        path:'/about',
        component:About
    },

    {
        path:'/home',
        component:Home,
        children:[
            {
            path:'/home/news',
            component:News
            },
            {
            path:'/home/messages',
            component:Messages,
            children:[
            {        // 动态路径参数 以冒号开头
                path:'/home/messages/detail/:id',
                component:MessagesDetail
            }
        ]
        },
        {
            path:'/home',
            redirect:'/home/news'
        }
    ]

    },
    {
        path:'/',
        redirect:'/about'
    }
]