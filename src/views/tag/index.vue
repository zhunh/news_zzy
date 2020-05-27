<template>
    <div class="row">
        <p><el-page-header @back="goBack" :content='tag'></el-page-header></p>     
        <p type="info" v-for="item in newsList" :key="item._id">
            <el-link type="info" style="font-size:20px" :href='"/detail/"+item._id'>{{item.title}}</el-link>
        </p>    
    </div>
</template>
<script>
import { getNewsByTag } from '@/api/news'
export default {
    data(){
        return{
            tag:'<template><div>12</div></template>',
            newsList:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        }
    },
    created(){
        let tag = this.$route.params.tag
        this.tag = tag
        getNewsByTag(tag).then((data)=>{
            this.newsList = data.data
        })
    }
}
</script>