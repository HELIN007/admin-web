<template>
  <div>
    {{ obj.id }}
    <el-button type="primary" size="large" @click="GoToLogout()"
      >退出登录</el-button
    >
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { showError } from "../../utils/error"
import store from "../../store"
import { Logout } from "../../api"
import { useRouter } from "vue-router"

const obj = reactive({
  id: "home",
})
const username = reactive({
  username: store.state.username,
})
const router = useRouter()

async function GoToLogout() {
  try {
    console.log("退出登录的账号是：", username)
    const response = await Logout(username)
    const { status, msg } = response.data
    if (status == 200) {
      store.dispatch("SetToken", "")
      store.dispatch("SetUsername", "")
      router.push("login")
    } else {
      showError(msg)
    }
    console.log("---", store.state.username, store.state.token)
  } catch (error) {
    showError(error.message)
  }
}
</script>
