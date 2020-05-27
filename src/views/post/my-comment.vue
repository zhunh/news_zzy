<template>
    <div>
        <p><el-page-header @back="goBack" content='我的评论'></el-page-header></p> 
        <el-card>
          <div>
            <p v-for="item in commentList">
            <el-link type="info" :key="item._id" :href='"/detail/"+item.news_id'>{{item.comment}}</el-link>
            <span style="float:right;"><el-link icon="el-icon-delete" v-on:click="deleteComment(item._id)">删除</el-link></span>
            </p>
          </div> 
        </el-card>    
    </div>
</template>
<script>
import { getCommentByAuthor, deleteCommentById } from '@/api/news'
export default {
    data(){
        return{
            commentList:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        },
        deleteComment(id){
            deleteCommentById(id).then((res)=>{
                this.$message({
                    message:res.data
                })
                this.$router.push('/')
            })
        }
    },
    created(){
        var author = JSON.parse(sessionStorage.getItem('user_info')).username
        getCommentByAuthor(author).then((data)=>{
            this.commentList = data.data
        })
    }
}
</script>