import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from "./store/index"
import { create, NButton, NInput } from "naive-ui"

const naive = create({
  components: [NButton, NInput],
})

const app = createApp(App)

app.use(router).use(store).use(naive).mount("#app")
