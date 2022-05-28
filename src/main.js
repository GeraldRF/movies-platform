import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/app.css'

//Materialize
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import router from './router'

createApp(App).use(router).mount('#app')

