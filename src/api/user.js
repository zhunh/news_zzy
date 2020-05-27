import request from "@/utils/request"
// 登录
export function login(user){
    return request({
        url:"/login",
        method:"post",
        data:user
    })
}
// 注册
export function register(user){
    return request({
        url:"/register",
        method:"post",
        data:user
    })
}
