/*
 * @Author: dowell87
 * @Date: 2021-08-27 23:50:14
 * @Descripttion: 
 * @LastEditTime: 2021-11-03 17:55:14
 */
import { createApp } from 'vue'
import App from './App.vue'
import VangoIcon from '../packages/install'

const app = createApp(App)
app.use(VangoIcon)
app.mount('#app')
