<template>
  <main id="main-content" tabindex="-1" aria-label="Page not found" class="outline-none">
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p class="text-8xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</p>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-10">
        That page doesn't exist — but Nerando's goals page does.
      </p>
      <div class="flex gap-4">
        <router-link
          to="/current"
          class="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Current Year
        </router-link>
        <router-link
          to="/archives"
          class="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          Archives
        </router-link>
      </div>
    </div>
  </main>
</template>
