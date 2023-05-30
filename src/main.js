import { createApp } from 'vue'
import 'animate.css';
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
