<template>
    <div>
        <div id="navbar">
            <div id="lhs">
                Home
            </div>
            <div id="rhs">
                <div id="account">
                    Account
                </div>
                <div id="cart" @click="dialog = !dialog">
                    <q-icon name="shopping_cart" />
                    <div id="cart-count">
                        {{ store.cartCount }}
                    </div>
                    
                    <CartPopUp :diglogueVisibility="dialog"/>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../../store';
import CartPopUp from '../CartComponents/CartPopUp.vue';


const store = useCartStore();

let dialog = ref(false);


</script>

<style scoped>
#cart{
    display:flex;
    align-items: center;
}
#cart-count{
    padding-bottom:12px;
}

#navbar{
    display: flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: 1px solid black;
}

#lhs{
    display:flex;
    flex:3;
    align-items: center;
}

#rhs{
    display:flex;
    flex:7;
    align-items: center;
    justify-content: flex-end; 
    gap:10%;
}
</style>