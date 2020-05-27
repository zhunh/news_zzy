<template>
    <div class="body">
    <div class="dowebok" ref="dowebok">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>注册</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用邮箱注册</span>
                <input type="text" placeholder="姓名" v-model="user.username">
                <!-- <input type="text" placeholder="电子邮箱"> -->
                <input type="password" placeholder="密码" v-model="user.password">
                <button @click="register">注册</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>登录</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用您的帐号</span>
                <input type="text" v-model="user2.username" placeholder="用户名">
                <input type="password" v-model="user2.password" placeholder="密码">
                <a href="#">忘记密码？</a>
                <button @click="onSubmit">登录</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>已有帐号？</h1>
                    <p>请使用您的帐号进行登录</p>
                    <button class="ghost" ref="signIn" v-on:click="toggleClass">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>没有帐号？</h1>
                    <p>立即注册加入我们，和我们一起开始旅程吧</p>
                    <button class="ghost" ref="signUp" v-on:click="toggleClass">注册</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
@import "~@/assets/css/login.css";

</style>
<script>
import { login, register} from '@/api/user'
export default {
    data(){
        return{
            user:{
                username:"",
                password:""
            },
            user2:{
                username:"",
                password:""
            },
            class:false
        }
    },
    methods:{
        toggleClass(){
            this.class = !this.class
            if(this.class){
                this.$refs['dowebok'].classList.add("right-panel-active")
            } else{
                this.$refs['dowebok'].classList.remove("right-panel-active")
            }
        },
        onSubmit(){
            if(this.user2.username == "" || this.user2.password == ""){
                this.$message({
                    message:"用户名或密码不为空"
                })
                return
            }
            login(this.user2).then((res)=>{
                this.$message({
                    message:res.data.info
                })
                if(res.data.user_info){
                    sessionStorage.setItem("user_info",JSON.stringify(res.data.user_info))
                    // 2.将 token 保存
                    sessionStorage.setItem("zzytoken",res.data.token)
                    this.$router.push('/')                    
                }
            }).catch(err=>{
                this.$message({
                    message:err.message
                })
            })
        },
        register(){
            if(this.user.username == "" || this.user.password == ""){
                this.$message({
                    message:"用户名或密码不为空"
                })
                return
            }
            register(this.user).then(res=>{
                this.$message({
                    message:res.data
                })
                this.$refs['dowebok'].classList.remove("right-panel-active")
            }).catch(err=>{
                this.$message({
                    message:err.message
                })
            })
        }
    },
    created(){      
    }
}
</script>