<template>
    <div class="flex min-h-screen flex-col" :class="isDarkMode ? 'dark' : ''">
      <div class="flex min-h-screen flex-col bg-gradient-to-b via-green-200 to-blue-300 from-yellow-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-200">
        <!-- Navigation -->
        <nav class="bg-white dark:bg-gray-800 shadow-lg w-full transition-colors duration-200">
          <div class="container mx-auto px-6 py-3">
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Is Nerando Done Yet?</h1>
              <div class="flex items-center space-x-4">
                <router-link
                  v-for="link in navLinks"
                  :key="link.path"
                  :to="link.path"
                  class="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  {{ link.name }}
                </router-link>
                <button
                  @click="toggleDarkMode"
                  class="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  <Moon v-if="!isDarkMode" class="h-5 w-5 text-gray-800" />
                  <Sun v-else class="h-5 w-5 text-yellow-300" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <!-- Main Content -->
        <router-view />

        <!-- Footer -->
        <footer class="bg-white dark:bg-gray-800 shadow-lg mt-auto transition-colors duration-200">
          <div class="container mx-auto px-6 py-4">
            <p class="text-center text-gray-600 dark:text-gray-400">
              © {{ new Date().getFullYear() }} Is Nerando Done Yet? | Created by Nerando Johnson
            </p>
          </div>
        </footer>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { Moon, Sun } from 'lucide-vue-next';

  export default defineComponent({
    name: 'App',
    components: {
      Moon,
      Sun
    },
    setup() {
      const isDarkMode = ref(false);
      const navLinks = [
        { name: 'Home', path: '/' },
        { name: '2024', path: '/2024' },
        { name: '2023', path: '/2023' },
        { name: '2022', path: '/2022' }
      ];

      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light');
      };

      onMounted(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'dark') {
          isDarkMode.value = true;
        }
      });

      return {
        isDarkMode,
        navLinks,
        toggleDarkMode
      };
    }
  });
  </script>
