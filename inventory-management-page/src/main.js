import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
// Create the app instance
const app = createApp(App);

// Use the router
app.use(router);
axios.defaults.baseURL = 'http://localhost:8000'
// Mount the app to the element with id 'app'
app.mount('#app');
