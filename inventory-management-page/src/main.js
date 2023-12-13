// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration

// Create the app instance
const app = createApp(App);

// Use BootstrapVue

// Use the router
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
