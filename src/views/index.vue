<template>
    <div>
        <Head/>
        <div class="home">
            <router-view :key="$route.fullPath"/> 
        </div>
        <Foot/>
    </div>
</template>
<style scoped>
.home{
  width: 70vw;
  margin: 0 auto;
}
</style>
<script>
import Head from '@/layout/Header.vue'
import Foot from '@/layout/Footer.vue'
export default {
    name:"Index",
    data(){
        return{

        }
    },
    components:{
        Head,
        Foot
    }
}
</script>