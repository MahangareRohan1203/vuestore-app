<template>
  <div id="container">
    <div id="lhs">
        <img :src="product.imageUrl" alt="">
    </div>
    <div id="rhs">
        <p>Title: {{ product.title }}</p>
        <p>Price: Rs.{{ product.price }}</p>
        <q-btn id="addtocart_btn" @click="addtoCart(product)" color="black" label="Add to Cart" />

    </div>
  </div>
</template>

<script setup>

import { db, doc, getDoc } from "./../../firebase.js";
import { onMounted, ref } from "vue";
import {useCartStore} from "./../../store.js"

const product = ref({});
// Here not UseRouter
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(async () => {
  const docRef = doc(db, "vuestore", route.params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    let x = docSnap.data();
    x.id = docSnap.id;
  
    product.value = x;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
});

const cartStore = useCartStore()
const addtoCart =(product)=>{
    console.log("product:", product )
    cartStore.addtoCart(product)
    console.log(cart)
  }

</script>

<style scoped>

#addtocart_btn{
  width: 50%;
}
#container{
        display:flex;
        margin-top: 5%;
}

#lhs{
    display: flex;
    flex:4;
}
#lhs img{
    width: 90%;
}

#rhs{
    display: flex;
    flex:6;
    flex-direction: column;
    margin-left:3%;
    font-size: 180%;
}
</style>
