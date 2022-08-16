import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log(__APP_GIT_VERSION__, __APP_GIT_HASH__, __APP_GIT_BRANCH__)
