import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');

// Export the app instance for potential use in other parts of the application
export default app;
