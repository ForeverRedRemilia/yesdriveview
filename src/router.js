import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'login', component:() => import('@/components/Login')
    },
    {
        path: '/index', name: 'index', component:() => import('@/components/Header')
    }
]

const router = new VueRouter({
    routes
})
export default router