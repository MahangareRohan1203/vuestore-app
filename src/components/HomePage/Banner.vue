<template>
    <div id="welcome_div">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup>
    defineProps(["msg"])
</script>

<style scoped>
    h1{
        font-weight: 500;
        font-size: 3rem;
         
    }
    #welcome_div{
        display:flex;
        height: 200px;
        justify-content: center;
        align-items: center;
        color:rgb(59, 116, 59)
        
    }
</style>