import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/srcipt/base.js'//导入初始化js

import './assets/fonts/iconfont/iconfont.css' //导入字体
import './assets/style/base.scss' //导入初始化css
import './assets/style/themes.scss' //导入主题css


createApp(App).use(store).use(router).mount('#app')
