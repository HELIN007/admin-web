import { nextTick } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import store from "../store"
import { showError } from "../utils/error"

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home/index.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 下一页不为login且token不为空
  if (to.name !== "login" && !store.state.token) {
    showError("你没有权限！")
    next({ name: "login" })
  } else {
    next()
  }
})

export default router
