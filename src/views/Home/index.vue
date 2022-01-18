<template>
  <div>
    {{ obj.id }}
    <n-button>naive-ui</n-button>
  </div>
  <div>
    <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
  </div>
  <div>
    {{ value }}
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
const value = ref(null)
const obj = reactive({
  id: "home",
})
</script>
