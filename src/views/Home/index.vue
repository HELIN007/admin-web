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
const router = useRouter()

async function GoToLogout() {
  try {
    const response = await Logout(store.state.username)
    const { status, msg } = response.data
    if (status == 200) {
      store.dispatch("SetToken", "")
      store.dispatch("SetUsername", "")
      router.push("login")
    } else {
      showError(msg)
    }
  } catch (error) {
    showError(error.message)
  }
}
</script>
