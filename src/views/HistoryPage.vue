<script setup lang="ts">
// HistoryPage.vue — /history
// Static content page. All [PLACEHOLDER] text is marked for easy find/replace.

interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  highlights: string[];
}

interface ImplementationCard {
  version: string;
  label: string;
  name: string;
  description: string;
  cta: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface Recommendation {
  title: string;
  body: string;
}

const timeline: TimelineEntry[] = [
  {
    year: 2019,
    title: 'The First Tracker',
    description:
      'The initiative launched with a plain HTML file, three goal categories, and a public URL. Four articles shipped — the writing habit that would carry every year after.',
    highlights: ['4 articles published', 'First public accountability URL', 'Tracker concept proven'],
  },
  {
    year: 2020,
    title: 'Surviving the Disruption',
    description:
      'The pandemic shut down every in-person conference on the calendar. The tracker stayed alive on one article and a stubborn refusal to declare a gap year. It turned out public commitments are hardest — and most useful — when the external environment gives you every excuse to quit.',
    highlights: ['1 article published', 'Conferences cancelled industry-wide', 'Accountability systems prove their value under disruption'],
  },
  {
    year: 2021,
    title: 'Community Roots',
    description:
      'The tracker went quieter on output but the community footprint grew. A Virtual Coffee lightning talk on leveraging developer community marked the first time the initiative\'s philosophy went on stage.',
    highlights: ['1 article published', 'Virtual Coffee lightning talk', 'Community-first approach solidified'],
  },
  {
    year: 2022,
    title: 'The Breakout Year',
    description:
      'Ten talks completed — a perfect score on the hardest category. MagnoliaJS, Refactr, AtlDevCon, ConnectTech, Prairie Dev Con. The tracker became a proof of concept worth forking.',
    highlights: ['10/10 talks — first perfect year', '2 projects shipped (portfolio + Burble)', '2 articles published', 'First Sessionize & PaperCall profiles live'],
  },
  {
    year: 2023,
    title: 'Writing Volume',
    description:
      '5 articles published — the writing pace accelerated. Conference work pulled toward the "How !To Be Mentored" talk that would become a recurring keynote thread across future years.',
    highlights: ['5 articles published', 'ConnectTech talk — Essential People Skills', 'Laid groundwork for the Vue 3 rebuild'],
  },
  {
    year: 2024,
    title: 'Rebuilding Momentum',
    description:
      'A reset year. The Vue 3 rebuild of the tracker launched publicly. Two talks, two articles, two podcast/media appearances — not the numbers, but the infrastructure was now solid.',
    highlights: ['Vue 3 + Tailwind rebuild shipped', 'Orlando Code Camp + ConnectTech talks', 'Virtual Coffee Podcast appearance', 'GEO writing series began'],
  },
  {
    year: 2025,
    title: 'Best Year Yet',
    description:
      '8 talks across the southeast circuit — DevNexus, 200OK, MagnoliaConf and more. 9 articles including the breakout GEO series. 2 projects shipped: DevelopingDvlpr and IsNerandoDoneYet. Two boilerplates released.',
    highlights: ['8/10 talks — strongest conference year', '9/10 articles — GEO series broke out', '2 projects shipped', '2 open-source boilerplates released'],
  },
];

const implementations: ImplementationCard[] = [
  {
    version: 'v1',
    label: 'No build step required',
    name: 'HTML · CSS · JavaScript',
    description:
      'The original format. A single HTML file, one JS data object, and a public URL. Three columns — Talks, Projects, Articles — rendered straight from a literal array. No build step, no dependencies, just a browser and a commitment.',
    cta: 'View Boilerplate',
    href: 'https://github.com/Nerajno/isnerandodoneyet-boilerplate-html',
  },
  {
    version: 'v2',
    label: 'Current stack',
    name: 'Vue 3 · Tailwind CSS',
    description:
      'The full rebuild, shipped publicly in 2024. The flat-file format had served its purpose but couldn\'t scale to dark mode, typed data, or a component library. Pinia store, Vue Router, and Tailwind v4 — same three-column philosophy, modern infrastructure.',
    cta: 'View Boilerplate',
    href: 'https://github.com/Nerajno/isnerandodoneyet-boilerplate-vue',
  },
  {
    version: 'Live',
    label: 'isnerandodoneyet.com',
    name: 'The Production Site',
    description:
      'The live tracker for Nerando\'s current year — Talks, Projects, and Articles tracked publicly against annual targets. Updated at year-start with commitments and checked throughout the year. This is the system in production, not a demo.',
    cta: 'View Current Progress',
    href: '/current',
  },
];

const stats: Stat[] = [
  { value: '7+', label: 'Years Active', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
  { value: '3', label: 'Disciplines Tracked', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' },
  { value: '2', label: 'Open-Source Boilerplates', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
  { value: '20+', label: 'Talks Given', icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z' },
  { value: '20+', label: 'Articles Published', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { value: '4+', label: 'Projects Shipped', icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
];

const recommendations: Recommendation[] = [
  {
    title: 'Close the projects gap.',
    body: 'Talks and articles have found their rhythm. Projects need tighter scope at commit time — a 10-goal target with no scoping discipline is the same as no target at all.',
  },
  {
    title: 'Automate milestone logging.',
    body: 'Every milestone currently requires a manual data edit. A GitHub Action or simple API hook that logs a talk accepted, an article published, or a project shipped — timestamped and committed automatically — would close the gap between doing the work and recording it.',
  },
  {
    title: 'Build a community forks showcase.',
    body: 'Two boilerplates exist. The next step is a gallery of who has forked and shipped their own version — turning a solo tracker into a community pattern.',
  },
  {
    title: 'Add year-end retrospectives as a first-class feature.',
    body: 'The 2025 notes and recap fields in the data model are the seed. A dedicated retrospective view per year — accessible at /year/:year — would make the history navigable.',
  },
];
</script>

<template>
  <main id="main-content" tabindex="-1" aria-label="History" class="outline-none">

    <!-- SECTION: Hero -->
    <section class="relative overflow-hidden flex items-center justify-center text-center py-28 mb-12 min-h-[50vh] bg-gray-900 dark:bg-slate-950">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-gray-900 to-gray-950" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto px-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">2019 – Present</span>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The History of IsNerandoDoneYet
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A public accountability tracker for developers — tracking Talks, Projects, and Articles
          since 2019, across two tech stacks, two boilerplates, and seven years of shipping in public.
        </p>
      </div>
    </section>

    <!-- Page body constrained -->
    <div class="max-w-4xl mx-auto px-6">

      <!-- SECTION: Origin Story -->
      <section class="mb-16" aria-labelledby="origin-heading">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Origin Story</span>
        <h2 id="origin-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          It started with a simple question.
        </h2>
        <div class="prose max-w-none space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Private goals are easy to abandon. When only you know the target, you can quietly
            move it — redefine "done," extend the deadline, or just stop counting. The tracker
            started with a simple hypothesis: if the commitments are public, the cost of quitting
            goes up. A URL anybody can visit is a low-tech forcing function.
          </p>
          <p>
            Version one was a single HTML file with three columns — Talks, Projects, Articles —
            and a shared link. No framework, no build step, no database. The accountability came
            from the URL itself. When other developers could see the numbers in real time, the
            numbers started moving.
          </p>
          <p>
            By 2024 the stack had outgrown a flat file. The rebuild landed on Vue 3, Tailwind CSS,
            and a typed data layer that could grow with the goals. The philosophy stayed identical.
            Two boilerplates now exist so any developer can fork the system and run their own
            version — same structure, their own commitments.
          </p>
        </div>
      </section>

      <hr class="border-gray-200 dark:border-slate-700 mb-16" />

      <!-- SECTION: Timeline of Implementations -->
      <section class="mb-16" aria-labelledby="timeline-heading">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Year by Year</span>
        <h2 id="timeline-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Timeline of Implementations
        </h2>

        <ol class="relative border-l-2 border-gray-200 dark:border-slate-700 space-y-12 pl-8">
          <li v-for="entry in [...timeline].reverse()" :key="entry.year" class="relative">
            <!-- Year dot -->
            <span
              class="absolute -left-[2.6rem] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold ring-4 ring-white dark:ring-slate-950"
              aria-hidden="true"
            >
              {{ String(entry.year).slice(2) }}
            </span>

            <!-- Year label -->
            <p class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-1">{{ entry.year }}</p>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ entry.title }}</h3>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{{ entry.description }}</p>

            <!-- Highlights -->
            <ul class="flex flex-wrap gap-2 mb-6">
              <li
                v-for="h in entry.highlights"
                :key="h"
                class="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700"
              >
                {{ h }}
              </li>
            </ul>

            <!-- Screenshot placeholder -->
            <div
              class="w-full aspect-video bg-gray-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center"
              role="img"
              :aria-label="`Screenshot placeholder for ${entry.year} — ${entry.title}`"
            >
              <span class="text-sm text-gray-400 dark:text-gray-500 font-mono">
                [PLACEHOLDER — Screenshot {{ entry.year }}: {{ entry.title }}]
              </span>
            </div>
          </li>
        </ol>
      </section>

      <hr class="border-gray-200 dark:border-slate-700 mb-16" />

      <!-- SECTION: Previous Implementations Gallery -->
      <section class="mb-16" aria-labelledby="implementations-heading">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Versions</span>
        <h2 id="implementations-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Previous Implementations
        </h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
          The tracker has taken two distinct forms. Both are open source. Both are documented for anyone who wants to run the same system.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="impl in implementations"
            :key="impl.version"
            class="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col"
          >
            <!-- Screenshot placeholder -->
            <div
              class="w-full aspect-video bg-gray-100 dark:bg-slate-700 flex items-center justify-center"
              role="img"
              :aria-label="`Screenshot placeholder — ${impl.name}`"
            >
              <span class="text-xs text-gray-400 dark:text-gray-500 font-mono px-4 text-center">
                [PLACEHOLDER — {{ impl.name }}]
              </span>
            </div>

            <!-- Card body -->
            <div class="p-6 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-bold uppercase tracking-widest bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                  {{ impl.version }}
                </span>
                <span class="text-xs text-gray-400">{{ impl.label }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ impl.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-1">{{ impl.description }}</p>
              <a
                :href="impl.href"
                :target="impl.href.startsWith('http') ? '_blank' : undefined"
                :rel="impl.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="inline-flex items-center justify-center px-4 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm font-semibold rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
              >
                {{ impl.cta }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr class="border-gray-200 dark:border-slate-700 mb-16" />

      <!-- SECTION: Key Outcomes & Stats -->
      <section class="mb-16" aria-labelledby="stats-heading">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">By the Numbers</span>
        <h2 id="stats-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Key Outcomes
        </h2>

        <dl class="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white dark:bg-slate-800 rounded-xl p-6 text-center border border-gray-100 dark:border-slate-700 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-400 mx-auto mb-2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" :d="stat.icon" />
            </svg>
            <dt class="text-sm text-gray-500 dark:text-gray-400 mb-1">{{ stat.label }}</dt>
            <dd class="text-4xl font-black text-blue-500">{{ stat.value }}</dd>
          </div>
        </dl>
      </section>

      <hr class="border-gray-200 dark:border-slate-700 mb-16" />

      <!-- SECTION: Recommendations / What's Next -->
      <section class="mb-16" aria-labelledby="recommendations-heading">
        <span class="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2 block">Looking Forward</span>
        <h2 id="recommendations-heading" class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          What the history recommends.
        </h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
          Seven years of data surfaces patterns. These are the four things the record says to do next.
        </p>

        <div class="space-y-4 mb-12">
          <div
            v-for="(rec, i) in recommendations"
            :key="rec.title"
            class="flex items-start gap-5 bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm"
          >
            <span class="text-2xl font-black text-blue-200 dark:text-blue-900 flex-shrink-0 leading-none mt-0.5">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div>
              <p class="font-semibold text-gray-900 dark:text-white mb-1">{{ rec.title }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ rec.body }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <router-link
            to="/current"
            class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow"
          >
            See Current Progress →
          </router-link>
        </div>
      </section>

    </div><!-- end max-w-4xl -->
  </main>
</template>
