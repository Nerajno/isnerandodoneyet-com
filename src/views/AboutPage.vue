<script setup lang="ts">
import { ref } from 'vue';

const videoFailed = ref(false);
const videoSrc = '/videos/hero-bg.mp4';

const whyPoints: { title: string; body: string }[] = [
  {
    title: 'Visibility creates accountability.',
    body: 'A goal that lives in a private note can be quietly edited. A goal that lives on a public URL cannot.',
  },
  {
    title: 'Progress shared builds community.',
    body: 'Sharing the journey — not just the wins — invites collaboration, mentorship, and honest conversation.',
  },
  {
    title: 'It creates a record worth having.',
    body: 'Year over year, this tracker becomes a portfolio of output: proof of consistency, not just capability.',
  },
];
</script>

<template>
  <main id="main-content" tabindex="-1" aria-label="About" class="outline-none">

    <!-- Hero with background video -->
    <section class="relative overflow-hidden flex items-center justify-center text-center py-32 mb-12 min-h-[60vh]">
      <!-- Fallback image — always rendered, video covers it when loaded -->
      <img
        src="https://images.pexels.com/photos/33133723/pexels-photo-33133723.jpeg"
        class="absolute inset-0 w-full h-full object-cover scale-110 blur"
        alt=""
        aria-hidden="true"
      />

      <!-- Background video — hidden via v-show if file fails to load, revealing the image -->
      <video
        v-show="!videoFailed"
        class="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
        @error="videoFailed = true"
      >
        <source :src="videoSrc" type="video/mp4" @error="videoFailed = true" />
      </video>

      <!-- Dark overlay for readability -->
      <div class="absolute inset-0 bg-black/55" aria-hidden="true"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-3xl mx-auto px-6">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Progress, Made Public.
        </h1>
        <p class="text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow mb-8">
          <strong>IsNerandoDoneYet</strong> is my personal accountability system built as an example for developers
          who believe that showing your work is just as important as doing it.
        </p>
        <router-link
          to="/current"
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg"
        >
          Current Year's Progress
        </router-link>
      </div>
    </section>

    <!-- Rest of page constrained -->
    <div class="max-w-4xl mx-auto px-6">

    <!-- Divider -->
    <hr class="border-gray-200 dark:border-slate-700 mb-16" />

    <!-- The Problem -->
    <section class="mb-16" aria-labelledby="problem-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">The Problem</span>
      <h2 id="problem-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Most goals don't survive February.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
        Developers are exceptionally good at setting goals. The roadmap gets written, the yearly
        targets get committed to, and then — quietly — they get forgotten. Not from lack of
        ambition, but from lack of visibility.
      </p>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
        Private goals are easy to abandon. There's no friction, no witness, no record. When no one
        is watching, the cost of giving up is zero.
      </p>
    </section>

    <!-- What This Is -->
    <section class="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-10 shadow border border-gray-100 dark:border-slate-700" aria-labelledby="what-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">What This Is</span>
      <h2 id="what-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        One question. One answer. Updated live.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        This site is a live, public record of yearly goals across three disciplines: <strong class="text-gray-800 dark:text-white">talks</strong>,
        <strong class="text-gray-800 dark:text-white">projects</strong>, and
        <strong class="text-gray-800 dark:text-white">articles</strong>. Each goal is tracked, each
        milestone is logged, and the whole thing is visible to anyone who asks the question.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div class="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
          <div class="text-3xl font-bold text-blue-500 mb-1">Talks</div>
          <p class="text-sm text-gray-500 dark:text-gray-400">Conferences, meetups, and workshops — where ideas go public.</p>
        </div>
        <div class="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
          <div class="text-3xl font-bold text-blue-500 mb-1">Projects</div>
          <p class="text-sm text-gray-500 dark:text-gray-400">Software shipped — not planned, not started. Shipped.</p>
        </div>
        <div class="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
          <div class="text-3xl font-bold text-blue-500 mb-1">Articles</div>
          <p class="text-sm text-gray-500 dark:text-gray-400">Writing that documents the learning, not just the outcomes.</p>
        </div>
      </div>
    </section>

    <!-- Why Public Accountability Works -->
    <section class="mb-16" aria-labelledby="why-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Why It Works</span>
      <h2 id="why-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Public commitments carry weight.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        When progress is visible, accountability is real. This isn't about performance or
        optics — it's about creating a system where follow-through has an audience, and that
        audience creates just enough friction to keep moving.
      </p>
      <div class="space-y-4">
        <div v-for="point in whyPoints" :key="point.title"
          class="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-slate-700">
          <span class="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">{{ point.title }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ point.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="mb-16 bg-gray-900 dark:bg-slate-950 rounded-2xl p-10 text-white" aria-labelledby="philosophy-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">The Philosophy</span>
      <h2 id="philosophy-heading" class="text-3xl font-bold mb-8">Three rules. No exceptions.</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p class="text-4xl font-black text-blue-400 mb-2">01</p>
          <p class="font-semibold text-lg mb-1">Build in public.</p>
          <p class="text-sm text-gray-400">Progress shared is progress protected.</p>
        </div>
        <div>
          <p class="text-4xl font-black text-blue-400 mb-2">02</p>
          <p class="font-semibold text-lg mb-1">Measure what matters.</p>
          <p class="text-sm text-gray-400">Track output, not effort. Shipped beats started.</p>
        </div>
        <div>
          <p class="text-4xl font-black text-blue-400 mb-2">03</p>
          <p class="font-semibold text-lg mb-1">Ship. Reflect. Repeat.</p>
          <p class="text-sm text-gray-400">Each year ends with a review, not a resolution.</p>
        </div>
      </div>
    </section>

    <!-- The History -->
    <section class="mb-16" aria-labelledby="history-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">The History</span>
      <h2 id="history-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Seven years of shipping in public.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
        What started in 2019 as a single HTML file and a list of goals has grown into a full Vue 3
        application, two open-source boilerplates, and a living record of talks given, projects
        shipped, and articles published — year over year, without exception.
      </p>

      <!-- Snapshot cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
          <p class="text-2xl font-black text-blue-500 mb-1">2019</p>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">The first tracker.</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">A plain HTML file, three goals, and a public URL. The idea proved itself in year one.</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
          <p class="text-2xl font-black text-blue-500 mb-1">2022</p>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">The rebuild.</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Vue 3, Tailwind, and Pinia replaced the static file. The tracker became a product.</p>
        </div>
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-700">
          <p class="text-2xl font-black text-blue-500 mb-1">2025</p>
          <p class="font-semibold text-gray-900 dark:text-white mb-1">Best year yet.</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">8 talks, 9 articles, 2 shipped projects — and two boilerplates released for the community.</p>
        </div>
      </div>

      <!-- Recommendations teaser -->
      <div class="bg-blue-50 dark:bg-slate-800 rounded-2xl p-8 border border-blue-100 dark:border-slate-700">
        <p class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">What the history shows</p>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
            <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
            Public goals outlast private ones — every year that launched publicly was completed.
          </li>
          <li class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
            <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
            Talks and articles compound — earlier years created the reputation that filled later calendars.
          </li>
          <li class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
            <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
            Projects are the hardest category — scope discipline is the unlock for 2026.
          </li>
          <li class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
            <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
            The tracker itself became a project worth shipping — two boilerplates now let others do the same.
          </li>
        </ul>
        <router-link
          to="/history"
          class="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors text-sm"
        >
          View the full history →
        </router-link>
      </div>
    </section>

    <!-- Resources & Boilerplate -->
    <section class="mb-16 border-t border-gray-200 dark:border-slate-700 pt-16" aria-labelledby="resources-heading">
      <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Resources</span>
      <h2 id="resources-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Build your own version.
      </h2>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
        This project is open to fork and adapt. Two boilerplates are available depending on your stack —
        one for developers who want to get started without a build step, and one for teams already
        working in Vue 3.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Version 1: HTML/CSS/JS -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-gray-100 dark:border-slate-700 flex flex-col">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">Version 1</span>
            <span class="text-xs text-gray-400">No build step required</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">HTML · CSS · JavaScript</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            The simplest entry point. Update your data in a single JS file, deploy anywhere —
            GitHub Pages, Netlify, or just open it in a browser.
          </p>
          <ul class="space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span><code class="font-mono bg-gray-100 dark:bg-slate-700 px-1 rounded">data.js</code> — edit your goals here, no config needed</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>CSS custom properties for light/dark mode out of the box</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>localStorage for checkbox state persistence</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>README template covering setup, data updates, and deployment</span></li>
          </ul>
          <a
            href="https://github.com/Nerajno/isnerandodoneyet-boilerplate-html"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>

        <!-- Version 2: Vue 3 + Tailwind -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow border border-gray-100 dark:border-slate-700 flex flex-col">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">Version 2</span>
            <span class="text-xs text-gray-400">Recommended for Vue teams</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Vue 3 · Tailwind CSS</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            The full-featured version. Pinia for state, Vue Router, typed data layer, and Tailwind v4 —
            structured to scale as your tracker grows.
          </p>
          <ul class="space-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>Vite + Vue 3 + TypeScript with interfaces pre-built</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>Pinia store — add years, categories, and updates in one file</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>Dark mode, composables, and router included out of the box</span></li>
            <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">→</span> <span>README covers forking, adding years, updating the store, and deployment</span></li>
          </ul>
          <a
            href="https://github.com/Nerajno/isnerandodoneyet-boilerplate-vue"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-12" aria-labelledby="cta-heading">
      <h2 id="cta-heading" class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        See where things stand right now.
      </h2>
      <p class="text-gray-500 dark:text-gray-400 mb-8">
        The current year's progress is live and updated as milestones are hit.
      </p>
      <router-link
        to="/current"
        class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow"
      >
        View Current Progress
      </router-link>
    </section>

    </div><!-- end max-w-4xl -->
  </main>
</template>

