import Vue from 'vue'
import VueRouter from 'vue-router'

//模块化机制编程，导入Vue和VueRouter
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import ProductList from "../../../components/ProductList";
import Home from "../views/Home";
// import base from "../api/base";


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {path:'/',redirect: 'Home/activityIndex'},
    // {path:'*',redirect: 'Home/activityIndex'},
    // {
    //     path: '/Home',
    //     name: 'Home',
    //     component: Home,
    //     children:[
    //         {
    //             path: 'activityIndex',
    //             name: 'activityIndex',
    //             //component:activityIndex
    //         },
    //         {
    //             path: 'activityDetail',
    //             name: 'activityDetail',
    //             //component: activityDetail
    //         }
    //     ]
    // },
    {
        path: '/ProductList',
        name: ProductList,
        component: ProductList
    }

];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    module: 'hash',
    base:__dirname,
    routes // (缩写) 相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
export default router;