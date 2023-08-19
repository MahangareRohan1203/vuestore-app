import { defineStore } from "pinia";
import { computed, ref } from "vue";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore("cart", () => {
  // other options...

  const cart = ref([]);
  let cartCount = computed(() => cart.value.length);

  let cartTotal = computed(() => {
    let total = 0;
    cart.value.forEach((ele) => {
      total += (+(ele.price));
      console.log("I am here: ", ele);
    })
    return total;
  })
  // actions
  const addtoCart = (product) => {
    cart.value.push(product);
    console.log(cart.value);
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((x) => x.id !== id);
  };
  return { cartCount, addtoCart, removeFromCart, cart, cartTotal };
});
