import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify'
import VueTheMask from 'vue-the-mask';
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(VueTheMask)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
