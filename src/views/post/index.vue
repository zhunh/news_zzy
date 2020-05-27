<template>
    <div>
        <p><el-page-header @back="goBack" content='发布新闻'></el-page-header></p> 
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="标签">
            <el-select v-model="form.tags" placeholder="请选择所属类别">            
            <el-option label="新闻" value="新闻"></el-option>
            <el-option label="视频" value="视频"></el-option>
            <el-option label="图片" value="图片"></el-option>
            <el-option label="疫情" value="疫情"></el-option>
            <el-option label="图说" value="图说"></el-option>
            <el-option label="军事" value="军事"></el-option>
            <el-option label="理财" value="理财"></el-option>
            <el-option label="数据" value="数据"></el-option>
            <el-option label="财经" value="财经"></el-option>
            <el-option label="科技" value="科技"></el-option>
            <el-option label="时尚" value="时尚"></el-option>
            <el-option label="汽车" value="汽车"></el-option>
            <el-option label="房产" value="房产"></el-option>
            <el-option label="教育" value="教育"></el-option>
            <el-option label="文化" value="文化"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="内容">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Post</el-button>
            <el-button>cancel</el-button>
        </el-form-item>
        </el-form>        
    </div>
</template>
<script>
import { addNews } from '@/api/news'
export default {
    data(){
        return{
            form:{
                title:"",
                author:JSON.parse(sessionStorage.getItem('user_info')).username,
                post_date:new Date(),
                content:"",
                img:"",
                tags:""
            }
        }
    },
    methods:{
        onSubmit(){
            addNews(this.form).then(res=>{
                this.$message({
                    message:res.data
                })
                this.$router.push('/')
            }).catch(err=>{
                this.$message({
                    message:err.message
                })
            })
        },
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>