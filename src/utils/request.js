import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
    baseURL:"http://127.0.0.1:3000",
    timeout:5000
})
// 请求拦截
service.interceptors.request.use(
    // 请求成功对响应数据作处理
    config => {
        if(sessionStorage.getItem('zzytoken')){
            config.headers['AccessToken'] = sessionStorage.getItem('zzytoken')
        }
        return config
    },
    // 响应失败做些什么
    error => {
        console.log(error+"-zzy-request")
        return Promise.reject(error)
    }
)
// 响应拦截
service.interceptors.response.use(
    response => {
        return response
    },
    error =>{
        return Promise.reject(error)
    }
)

export default service