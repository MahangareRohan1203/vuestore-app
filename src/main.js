// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import  router  from './router.js'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'



import { createPinia } from 'pinia'









// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')


const pinia = createPinia()

myApp.use(pinia)
