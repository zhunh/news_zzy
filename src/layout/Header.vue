<template>
    <div class="nav">
        <el-menu mode="horizontal" router>
            <el-menu-item class="logo" index="/" >
            <el-image :src="logoSrc" style="height:100%;width:120px;" fit="contain"></el-image>
            </el-menu-item>
            <el-menu-item index="2" disabled>消息中心</el-menu-item>
            <el-menu-item>
            <el-input v-model="inputSearch" class="input-with-select">
                <el-select v-model="select" slot="prepend">
                  <el-option label="新闻" value="1"></el-option>
                  <el-option label="微博" value="2"></el-option>
                  <el-option label="图片" value="3"></el-option>
                  <el-option label="博客" value="4"></el-option>
                  <el-option label="视频" value="5"></el-option>
                  <el-option label="百科" value="6"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" v-on:click="search"></el-button>
            </el-input>
            </el-menu-item>
                <!-- <el-link v-if="userinfo">{{userinfo.username}}</el-link> -->
                <el-dropdown v-if="userinfo" style="float:right;margin-top:15px;margin-right:20px;">
                <span class="el-dropdown-link">
                    {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    <el-dropdown-item>
                        <router-link to="/post">发布新闻</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link to="/my-post">我的发布</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link to="/my-comment">我的评论</router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>                
                <el-link v-else href="/login" type="info" style="float:right;margin-top:15px;margin-right:20px;">登录</el-link>
        </el-menu>
    </div>
    
</template>
<style scoped>
    .nav{
        min-width: 1376px;
    }
    .logo{
        font-size: 48px;
        background-image: linear-gradient(to top, #ff4b2b, #fa849f);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
    }
    .el-input{
        width: 500px;
        /* padding-top: 10px; */
    }
</style>
<style>
    .el-select .el-input {
        width: 76px;
    }
</style>
<script>
export default {
    data(){
        return{
            userinfo:JSON.parse(sessionStorage.getItem('user_info')),
            select: '1',
            inputSearch:'',
            logoSrc:require('@/assets/search.png')
        }
    },
    methods:{
        logout(){
            sessionStorage.removeItem("zzytoken")
            sessionStorage.removeItem("user_info")
            this.$router.push('/login')
        },
        search(){
            this.$router.push('/search/'+this.inputSearch)
        }
    }
}
</script>