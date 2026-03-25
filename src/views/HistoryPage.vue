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
      '[PLACEHOLDER — describe how 2020 played out: COVID disruptions, conference cancellations, what kept the tracker alive and what lessons it surfaced about resilience.]',
    highlights: ['1 article published', 'Conferences cancelled industry-wide', '[PLACEHOLDER — key lesson from the year]'],
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
    highlights: ['5 articles published', 'ConnectTech talk — Essential People Skills', '[PLACEHOLDER — any project notes from 2023]'],
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
      'The original format. A single HTML file, one JS data object, and a public URL. [PLACEHOLDER — describe what the first version looked like visually and what it tracked.]',
    cta: 'View Boilerplate',
    href: 'https://github.com/Nerajno/isnerandodoneyet-boilerplate-html',
  },
  {
    version: 'v2',
    label: 'Current stack',
    name: 'Vue 3 · Tailwind CSS',
    description:
      'The full rebuild. Pinia store, Vue Router, typed data layer, dark mode, and Tailwind v4. [PLACEHOLDER — describe what motivated the rewrite and when it went live.]',
    cta: 'View Boilerplate',
    href: 'https://github.com/Nerajno/isnerandodoneyet-boilerplate-vue',
  },
  {
    version: 'Live',
    label: 'isnerandodoneyet.com',
    name: 'The Production Site',
    description:
      '[PLACEHOLDER — describe what the current live site tracks, how often it updates, and what makes it different from the boilerplates.]',
    cta: 'View Current Progress',
    href: '/current',
  },
];

const stats: Stat[] = [
  { value: '7+', label: 'Years Active' },
  { value: '3', label: 'Disciplines Tracked' },
  { value: '2', label: 'Open-Source Boilerplates' },
  { value: '20+', label: 'Talks Given' },
  { value: '20+', label: 'Articles Published' },
  { value: '4+', label: 'Projects Shipped' },
];

const recommendations: Recommendation[] = [
  {
    title: 'Close the projects gap.',
    body: 'Talks and articles have found their rhythm. Projects need tighter scope at commit time — a 10-goal target with no scoping discipline is the same as no target at all.',
  },
  {
    title: 'Automate milestone logging.',
    body: '[PLACEHOLDER — describe what manual update friction looks like and what a logged, automated system could look like going forward.]',
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
            [PLACEHOLDER — describe the moment the idea began: the problem with private goals, the
            friction-free cost of giving up, and the decision to make a year's commitments
            visible to anyone with a URL.]
          </p>
          <p>
            [PLACEHOLDER — describe what the first version looked like: a plain HTML file, three
            categories, a public link shared with a handful of developer friends. What happened
            when other people could see the progress in real time.]
          </p>
          <p>
            [PLACEHOLDER — describe the evolution from v1 to the current Vue 3 stack: what drove
            the rebuild, what stayed the same by design, and why two boilerplates now exist so
            others can run the same system.]
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
          <li v-for="entry in timeline" :key="entry.year" class="relative">
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
