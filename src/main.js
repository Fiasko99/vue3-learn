import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from "./components/Global";

const app = createApp(App)

app.use(router)
app.component('global-component', GlobalComponent)

app.mount('#app')
