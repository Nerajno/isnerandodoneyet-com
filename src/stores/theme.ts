import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false);

  function init() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDarkMode.value = saved === 'dark';
    } else {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    apply();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        isDarkMode.value = e.matches;
        apply();
      }
    });
  }

  function apply() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  function toggle() {
    isDarkMode.value = !isDarkMode.value;
    apply();
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  }

  return { isDarkMode, init, toggle };
});
