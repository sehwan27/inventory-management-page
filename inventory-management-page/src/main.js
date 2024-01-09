import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import axios from 'axios'
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// Create the app instance
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faRightToBracket)

const app = createApp(App);

// Use the router
app.use(router);
app.component('TopNav', TopNav)
app.component('FooterComponent', Footer)
axios.defaults.baseURL = 'http://localhost:8000'

axios.interceptors.request.use((config) => {
    if (!['/login', '/register'].includes(config.url)) {
        const token = sessionStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
// Mount the app to the element with id 'app'
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
