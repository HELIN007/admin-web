import service from "../utils/request"

export function Login(data) {
  return service({
    method: "post",
    url: `api/v1/login`,
    data,
  })
}
