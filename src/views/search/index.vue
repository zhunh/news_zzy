<template>
    <div class="row">
        <p><el-page-header @back="goBack" :content='"搜索 "+key+" 的结果："'></el-page-header></p>     
        <p type="info" v-for="item in searchList" :key="item._id">
            <el-link type="info" style="font-size:20px" :href='"/detail/"+item._id'>{{item.title}}</el-link>
        </p>    
    </div>
</template>
<script>
import { searchNews } from '@/api/news'
export default {
    data(){
        return{
            key:"",
            searchList:[]
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        },
        init(){
            let key = this.$route.params.key
            this.key = key
            searchNews({key:key}).then((data)=>{
                this.searchList = data.data
            })            
        }        
    },
    watch:{
        '$route'(to, from){
            this.init()
        }
    },
    created(){
        this.init()
    }    
}
</script>