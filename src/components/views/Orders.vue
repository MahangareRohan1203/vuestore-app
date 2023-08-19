<template>
  <NavbarVue />
  <div id="container">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact Number*"
      />

      <q-input
        filled
        type="text"
        v-model="form.address"
        label="Your Address*"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import NavbarVue from "../HomePage/Navbar.vue";
import { reactive } from "vue";
import { useCartStore } from "../../store";
import { db, collection, addDoc } from "./../../firebase.js";
let cartStore = useCartStore();

const form = reactive({
  name: "",
  contact: 9,
  address: "",
  orders: cartStore.cart,
  total: cartStore.cartTotal,
});

const onSubmit = async () => {
  console.log(form);

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log("Document written with ID: ", docRef.id);
};
</script>

<style scoped>
#container {
  margin-top: 10%;
  margin: auto;
  width: 50%;
}
</style>
