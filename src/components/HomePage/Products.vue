<template>
    <div id="products">
        <div v-for="i in Products" @click="showProduct(i.id)" id="card">
            <img :src="i.imageUrl" alt="" srcset="">
            <p>{{ i.title }}</p>
            <p>Rs.{{ i.price }}</p>
        </div>
    </div>
</template>

<script setup>
    // import data from "../../data/products.json"
    import { onMounted, ref} from "vue";
    import axios from "axios"

    import {useRouter} from "vue-router"
    const router = useRouter();

    let Products = ref([]);

    import {db, collection, getDocs} from "../../firebase.js"
    console.log("db", db)
    
    const showProduct = (id)=>{
        console.log(id);
        router.push(`productDetails/${id}`);
    }

    onMounted(async()=>{
        // console.log("Axios called")
        // axios.get('https://fakestoreapi.com/products')
        // .then(function (response) {
        //     // handle success
        //     console.log("Response",response);
        //     Products.value = response.data;
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
        // .finally(function () {
        //     // always executed
        // });


        const querySnapshot = await getDocs(collection(db, "vuestore"));
        querySnapshot.forEach((doc) => {
        const i = doc.data();
        i.id = doc.id;
        Products.value.push(i);
        console.log(i);
        });
    })
    
  

</script>

<style scoped>
    #products{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 3%;
        text-align: center;
        height: max-content;
        gap:3%;
        justify-content: center;
    }
    #products img{
        width: 80%;
        object-fit: cover;
    }

    #card{
        width: 300px; /* Set the width of your card container */
        border: 1px solid #ddd;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items:center;
        text-align: center; /* Center-align text content */
    }
</style>