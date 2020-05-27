<template>
    <div>
        <p><el-page-header @back="goBack" content='我的发布'></el-page-header></p> 
        <el-card>
          <div>
            <p v-for="item in newsList">
            <el-link type="info" :key="item._id" :href='"/detail/"+item._id'>{{item.title}}</el-link>
            <span style="float:right;"><el-link icon="el-icon-delete" v-on:click="deleteNews(item._id)">删除</el-link></span>
            </p>
          </div> 
        </el-card>    
    </div>
</template>
<script>
import { getNewsByAuthor, deleteNewsById } from '@/api/news'
export default {
    data(){
        return{
            newsList:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        },
        deleteNews(id){
            deleteNewsById(id).then((res)=>{
                this.$message({
                    message:res.data
                })
                this.$router.push('/')
            })
        }
    },
    created(){
        var author = JSON.parse(sessionStorage.getItem('user_info')).username
        getNewsByAuthor(author).then((data)=>{
            this.newsList = data.data
        })
    }
}
</script>