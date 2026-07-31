import { createApp, computed } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@fontsource-variable/inter';
import '@fontsource-variable/outfit';
import './assets/main.css';
import './style.css';
import { useThemeStore } from './store/theme';

const app = createApp(App);
app.use(createPinia());
app.use(router);

const theme = useThemeStore();

// Category colors — reactive to theme, aligned to design tokens
const categoryColors = computed(() => theme.isDarkMode
  ? { talks: '#38bdf8', projects: '#4ade80', articles: '#fbbf24' }  // sky-400 / green-400 / amber-400
  : { talks: '#0284c7', projects: '#16a34a', articles: '#d97706' }  // sky-600 / green-600 / amber-600
);

app.provide('categoryColors', categoryColors);
app.mount('#app');
