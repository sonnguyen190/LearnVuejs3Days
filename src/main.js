import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add some free styles */

library.add(faUserSecret)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
