import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import app from './app';

// Any additional global configurations can go here
app.config.errorHandler = (err) => {
  console.error('Global error:', err);
};

// The app is already mounted in app.ts
createApp(App)
  .use(router)
  .mount('#app');
