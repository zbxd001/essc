import vue from 'vue'

import store from "../store/index";
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    //{},//用户管理
    // {},//商品管理
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },//登录页
    {
        path: '/home',
        name:'Home',
        component: () => import('../views/users/Home'),
        redirect: '/allGoods',
        children: [ //子路由
            {//所有商品
                path: "/allGoods",
                name :"AllGoods",
                component: ()=> import('../views/users/allGoods'),
            },
            {//商品详情
                path: "/goodsDetail",
                name: "GoodsDetail",
                component: ()=> import('../views/users/goodsDetails')
            },
            {//添加商品
                path: "/addGoods",
                name: "AddGoods",
                component: ()=> import('../views/users/addGoods')
            },
            {//我的商品
                path:"/myGoods",
                name: "MyGoods",
                component: ()=> import('../views/users/MyGoods')
            },
            {//我的收藏
                path: "/bookMark",
                name: "BookMark",
                component: ()=>import('../views/users/Bookmark')
            },
            {//搜索商品
                path: "/search",
                name: "Search",
                component: () => import('../views/users/Search')
            }
        ]
    },//购物主页
    {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('../views/users/userInfo')
    },//个人信息页
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router