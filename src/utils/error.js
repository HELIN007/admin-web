export const showError = (msg) => {
  ElMessage({
    type: "error",
    // showClose: true,
    center: true,
    duration: 2000,
    message: `错误信息：${msg}`,
  })
}
