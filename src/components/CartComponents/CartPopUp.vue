<template>
  <div id="cart">
    <!-- {{ diglogueVisibility }} -->
    <q-dialog :seamless="true" :modelValue="diglogueVisibility" position="right">
      <q-card id="cart_card">
        <div>
          <h4>Recently Added Products</h4>
        </div>
        <q-space/>
        <div id="cart_products">
          <div id="cart_product" v-for="item in cartStore.cart">
            <div id="lhs">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div id="rhs">
              <p>Title: {{ item.title }} </p>
              <p>Rs.{{ item.price }}</p>
              <q-icon @click="removeFromCart(item.id)" name="delete"/>
            </div>
          </div>
        </div>
        
        <router-link to="/orders">
          <div id="place_order">
            <q-btn color="secondary" label="Proceed"/>
          </div>
        </router-link>

        
        <q-card-section class="row items-center no-wrap">
          <div></div>

          <q-space />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store.js";

const cartStore = useCartStore();
const removeFromCart = (item)=>{
    cartStore.removeFromCart(item);
}

defineProps(["diglogueVisibility"]) 


</script>

<style scoped>
#place_order{
  margin:5%;
}
#cart_card{
    height: 900px;
    margin-top: 50px;
}
#cart_product{
    display:flex;
    border:1px solid red;
    margin:4%;
}
#lhs {
  display: flex;
  flex: 6;
}

#lhs img{
    width:80%;
}

#rhs {
  display: flex;
  flex: 4;
  flex-direction: column;
}
</style>
