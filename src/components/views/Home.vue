<template>
    <div>
        <NavbarVue/>
        <BannerVue msg="Welcome to Vue Store"/>
        <q-btn color="white" text-color="black" label="Standard" />
        <ProductsVue/>

    </div>
</template>

<script setup>
    import NavbarVue from '../HomePage/Navbar.vue';
    import BannerVue from '../HomePage/Banner.vue';
    import ProductsVue from '../HomePage/Products.vue';
</script>

<style scoped>

</style>