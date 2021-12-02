import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL='https://8080-emerald-wallaby-ds206y87.ws-us21.gitpod.io//spring-loja'

createApp(App).use(store).use(router).mount('#app')
