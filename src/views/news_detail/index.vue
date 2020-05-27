<template>
    <div>
        <h2 style="text-align:center;">{{news.title}}</h2>
        <p style="text-align:center;">Posted by <el-link type="info">{{news.author}}</el-link> on {{news.post_date}} <el-tag type="warning">{{news.tags}}</el-tag></p>
        <div v-if='news.img!=""' style="text-align:center;">
            <img :src='"http://127.0.0.1:3000/"+news.img' height="300" alt="loading">
        </div>
        <p style="line-height:40px;">{{news.content}}</p>
        <!-- <p>{{news.img}}</p> -->
        <p>网友评论：</p>
        <el-form>
            <el-form-item>
                <el-input type="textarea" v-model="comment"></el-input>
                <el-button v-if="!userinfo" type="success" size="medium">Need Login</el-button>
                <el-button v-else type="success" size="medium" v-on:click="postComment">发表</el-button>
            </el-form-item>
        </el-form>
        <!-- <hr> -->
        <p v-for="it in commentList" :key="it._id"><span><i class="el-icon-user-solid"></i>{{it.user}}:</span>{{it.comment}}</p>
    </div>
</template>
<script>
import { getNewsById, getCommentList,  addComment} from '@/api/news'
export default {
    data(){
        return {
            comment:"",
            news:{},
            commentList:[],
            userinfo:JSON.parse(sessionStorage.getItem('user_info'))
        }
    },
    methods:{
        postComment(){
            let c = {
                user:this.userinfo.username,
                post_date:new Date(),
                news_id:this.$route.params.id,
                comment:this.comment
            }
            if(c.comment==""){
                this.$message({
                    message:"评论不能为空"
                })
                return
            }
            addComment(c).then((res)=>{
                this.$message({
                    message:res.data
                })
                this.fetchCommentList()
            })           
        },
        fetchCommentList(){
            let id = this.$route.params.id
            getCommentList(id).then((data)=>{
                this.commentList = data.data
            })
        }
    },
    created(){
        let id = this.$route.params.id
        getNewsById(id).then((data)=>{
            this.news = data.data
        })
        this.fetchCommentList()
        let userinfo = sessionStorage.getItem('user_info')
        if(userinfo){
            console.log(userinfo)
        }
        // console.log(new Date().toString())
    }
}
</script>