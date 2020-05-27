<template>
    <div>
        正在跳转...
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$router.push("/")
    }
}
</script>