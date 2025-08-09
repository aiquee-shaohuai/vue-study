import { createApp } from 'vue'

import App from './App.vue'

// 导入router和pinia
import router from './router'
import pinia from './stores'

const app = createApp(App)

console.log(aaa)

app.use(pinia)
app.use(router)

app.mount('#app')
