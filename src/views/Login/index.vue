<template>
  <div class="body">
    <div class="container">
      <div class="title">后台管理系统</div>
      <div class="userinfo">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
          :prefix-icon="User"
          show-word-limit="true"
          maxlength="12"
          size="large"
        />
      </div>
      <div class="userinfo">
        <el-input
          v-model="user.password"
          placeholder="请输入密码"
          type="password"
          :prefix-icon="Lock"
          maxlength="8"
          size="large"
        />
      </div>
      <div class="login">
        <el-button
          type="primary"
          :loading="isLoading"
          size="large"
          @click="GoToLogin()"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { User, Lock } from "@element-plus/icons-vue"
import { Login } from "../../api"
import { showError } from "../../utils/error"

const router = useRouter()
const user = reactive({
  username: "admin",
  password: "123456",
})
const isLoading = ref(false)

async function GoToLogin() {
  isLoading.value = true
  try {
    const response = await Login(user)
    const { status, msg, _ } = response.data
    if (status == 200) {
      router.push("home")
    } else {
      showError(msg)
      isLoading.value = false
    }
  } catch (error) {
    showError(error.message)
    isLoading.value = false
  }
}
</script>

<style scoped>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.container {
  background-color: #fff;
  width: 650px;
  height: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.title {
  position: relative;
  font-size: 36px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  /* 文字渐变色，3行实现 */
  background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
  -webkit-background-clip: text;
  color: transparent;
}

.userinfo {
  width: 50%;
  margin: 0 auto;
  padding-bottom: 20px;
}

.login {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
