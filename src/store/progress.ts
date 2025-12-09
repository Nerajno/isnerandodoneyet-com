import { defineStore } from 'pinia';
import type { YearlyData, ProgressItem, Update, ProgressData } from '../types';

// Comprehensive update with all articles from blog and speaking engagements
const initialYears: YearlyData[] = [
  {
    year: 2025,
    items: [
      { total: 10, completed: 8, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 2, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 9, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - 8 completed
      {
        date: 'February 2025',
        text: 'This is a Technical Talk: Essential People Skills for Developers || Orlando Code Camp 2024',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'This is a Technical Talk || Orlando Code Camp 2024',
        },
      },
      {
        date: 'March 6, 2025',
        text: 'How !To Be Mentored || DevNexus 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'How !To Be Mentored || DevNexus 2025',
        },
      },
      {
        date: 'March 23, 2025',
        text: 'Back to Basics: Essential JavaScript Foundations || 200OK Developer Conference',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Back to Basics || 200OK 2025',
        },
      },
      {
        date: 'April 5, 2025',
        text: 'Skills to Bills: A Users Guide to Demonstrated Competency || Orlando Code Camp 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Skills to Bills || Orlando Code Camp 2025',
        },
      },
      {
        date: 'April 29, 2025',
        text: "Social Goodness || Civic Hacking - What's in it for me? || DevOps Days Atlanta 2025",
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: "Social Goodness || Civic Hacking || DevOps Days Atlanta 2025",
        },
      },
      {
        date: 'August 2025',
        text: 'And It Was Written ~ An Introspective in the Importance of ReadMes || Carolina Codes 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'And It Was Written || Carolina Codes 2025',
        },
      },
      {
        date: 'October 2025',
        text: 'Back to Basics: Essential JavaScript Foundations for Modern Framework Development || ATL DevCon 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Back to Basics || ATL DevCon 2025',
        },
      },
      {
        date: 'October 2025',
        text: 'Negotiation is the Key... A Little Violence and Ice-Cream || Magnolia Conf 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Negotiation is the Key || Magnolia Conf 2025',
        },
      },

      // PROJECTS - 2 completed
      {
        date: 'July 12, 2025',
        text: 'DevelopingDvlpr - MVP of Current Portfolio',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/',
          text: 'DevelopingDvlpr Portfolio',
        },
      },
      {
        date: 'July 20, 2025',
        text: 'IsNerandoDoneYet - Status Tracker Of the Current Years Progress',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://isnerandodoneyet.com/',
          text: 'IsNerandoDoneYet Progress Tracker',
        },
      },

      // ARTICLES - 9 completed
      {
        date: 'January 2, 2025',
        text: 'Published: 11 JavaScript Fundamentals for Vue Developers',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/11-javascript-fundamentals-for-vue-developers',
          text: '11 JavaScript Fundamentals for Vue Developers',
        },
      },
      {
        date: 'January 20, 2025',
        text: 'Published: Building with TypeScript: A Lego-Based Guide',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/building-with-typescript-a-lego-based-guide',
          text: 'Building with TypeScript: A Lego-Based Guide',
        },
      },
      {
        date: 'March 6, 2025',
        text: 'Published: How !To Be Mentored V2 - Building Resilient Tech Careers Through Strategic Mentorship',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/how-to-be-mentored-v2-building-resilient-tech-careers-through-strategic-mentorship',
          text: 'How !To Be Mentored V2',
        },
      },
      {
        date: 'August 15, 2025',
        text: 'Published: And It Was Written - An Introspective on the Importance of READMEs',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/and-it-was-written',
          text: 'And It Was Written',
        },
      },
      {
        date: 'August 29, 2025',
        text: 'Published: Mastering D3.js for Interactive Data Visualization',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/why-d3js-enhancing-your-storytelling-technically',
          text: 'Mastering D3.js for Interactive Data Visualization',
        },
      },
      {
        date: 'September 3, 2025',
        text: 'Published: Carolina Codes 2025 - My First-Time Speaker Experience',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/carolina-codes-2025-my-first-time-speaker-experience',
          text: 'Carolina Codes 2025: Speaker Experience',
        },
      },
      {
        date: 'October 9, 2025',
        text: 'Published: Generative Engine Optimization (GEO): Explained',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/geo-explained',
          text: 'GEO: Explained',
        },
      },
      {
        date: 'October 27, 2025',
        text: 'Published: Generative Engine Optimization (GEO): Applied [Astro Implementation]',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/geo-applied',
          text: 'GEO: Applied',
        },
      },
      {
        date: 'November 16, 2025',
        text: 'Published: Start With the End in Mind: The Developer\'s Guide to Shipping Side Projects',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/start-with-the-end-in-mind-developers-side-project-survival-guide',
          text: 'Start With the End in Mind',
        },
      },
    ],
  },
  {
    year: 2024,
    items: [
      { total: 10, completed: 2, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 2, title: 'Articles', category: 'Articles' },
      { total: 5, completed: 2, title: 'Media', category: 'Media' },
    ],
    updates: [
      // TALKS - 2 completed
      {
        date: 'March 2024',
        text: 'Unlocked: Growing Your Skills Through Open Source Development And Civic Hacking || Orlando Code Camp 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Unlocked: Open Source & Civic Hacking || Orlando Code Camp 2024',
        },
      },
      {
        date: 'October 2024',
        text: 'How to Conference: A User Guide || ConnectTech 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'How to Conference || ConnectTech 2024',
        },
      },

      // MEDIA - 2 completed
      {
        date: 'June 2024',
        text: 'Podcast: Building Community Through Code || Virtual Coffee Podcast',
        category: 'Media',
        year: 2024,
        link: {
          url: 'https://virtualcoffee.io/podcast',
          text: 'Virtual Coffee Podcast',
        },
      },
      {
        date: 'December 2024',
        text: 'Meetup: The Engineer\'s Guide to Socialization: DB Associations as Networking Patterns || Modern Web Meetup',
        category: 'Media',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Modern Web Meetup',
        },
      },

      // ARTICLES - 2 completed
      {
        date: 'August 20, 2024',
        text: 'Published: Vue-elingual: Teaching Your App to Speak Multiple Languages',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/blog/vue-elingual-teaching-your-app-to-speak-multiple-languages',
          text: 'Vue-elingual',
        },
      },
      {
        date: 'September 20, 2024',
        text: 'Published: 11 in 11: Concepts Learnt or Relearnt from Zero Day',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/blog/11-in-11-concepts-learnt-or-relearnt-from-zero-day',
          text: '11 in 11: Concepts Learnt',
        },
      },
    ],
  },
  {
    year: 2023,
    items: [
      { total: 10, completed: 1, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 5, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - 1 completed
      {
        date: 'October 2023',
        text: 'This is a Technical Talk - Essential People Skills for Developers || ConnectTech 2023',
        category: 'Talks',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'This is a Technical Talk || ConnectTech 2023',
        },
      },

      // ARTICLES - 5 completed
      {
        date: 'May 3, 2023',
        text: 'Published: So ... This is Your 1st Tech Conference : #VolunteerEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/so-this-is-your-1st-tech-conference-volunteeredition',
          text: '1st Tech Conference: #VolunteerEdition'
        },
      },
      {
        date: 'May 15, 2023',
        text: 'Published: So....This is your 1st Tech Conference : #AttendeeEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/so-this-is-your-1st-tech-conference-attendeeedition',
          text: '1st Tech Conference: #AttendeeEdition'
        },
      },
      {
        date: 'May 17, 2023',
        text: 'Published: How !To Be Mentored (V1)',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/how-to-be-mentored',
          text: 'How !To Be Mentored'
        },
      },
      {
        date: 'November 27, 2023',
        text: 'Published: Now What - How To Keep Learning after Landing the 1st Tech Job',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/now-what-how-to-keep-learning-after-landing-the-1st-tech-job',
          text: 'Now What - Keep Learning',
        },
      },
      {
        date: 'December 29, 2023',
        text: 'Published: Tech-nically Speaking: 30 Days In',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/tech-nically-speaking-30-days-in',
          text: 'Tech-nically Speaking: 30 Days In'
        },
      },
    ],
  },
  {
    year: 2022,
    items: [
      { total: 10, completed: 10, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 2, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 2, title: 'Articles', category: 'Articles' },
      { total: 5, completed: 1, title: 'Media', category: 'Media' },
    ],
    updates: [
      // TALKS - 10 completed
      {
        date: 'April 1, 2022',
        text: 'Created a list of talks on',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://sessionize.com/Nerajno', text: 'Sessionize' },
      },
      {
        date: 'August 12, 2022',
        text: 'Updated a list of talks on',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://www.papercall.io/speakers/45142',
          text: 'PaperCall',
        },
      },
      {
        date: 'April 28, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.MagnoliaJS.com/', text: 'MagnoliaJS' },
      },
      {
        date: 'July 3, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.refactr.tech/', text: 'Refactr' },
      },
      {
        date: 'July 30, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.atldevcon.com/', text: 'AtlDevCon 2022' },
      },
      {
        date: 'August 13, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://www.prairiedevcon.com/',
          text: 'Prairie Dev Con',
        },
      },
      {
        date: 'September 11-17, 2022',
        text: 'Spoke at MagnoliaJS and AtlDevCon 2022',
        category: 'Talks',
        year: 2022,
      },
      {
        date: 'September 2022',
        text: 'Social Goodness || Civic Hacking - What\'s in it for me? || Atlanta Developers\' Conference 2022',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Social Goodness || Civic Hacking || AtlDevCon 2022',
        },
      },
      {
        date: 'September 25, 2022',
        text: 'Speaking at',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.meetup.com/atlantajug/', text: 'ATLJUG' },
      },
      {
        date: 'October 2022',
        text: 'How !To Be Mentored || Connect Tech 2022',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'How !To Be Mentored || ConnectTech 2022',
        },
      },
      {
        date: 'November 9, 2022',
        text: 'Gave my talk on Open-Sourced Learning at ConnectTech2022',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://twitter.com/nerajno/status/1591142693820067840?s=20&t=wbDw7NqFSwXBSTc6U6ldYg',
          text: 'Open-Sourced Learning',
        },
      },
      {
        date: 'December 1, 2022',
        text: 'Gave a lighting talk on How Not !To Be Mentored at Software Crafters Atlanta',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://www.meetup.com/software-craftsmanship-atlanta/events/cbtsxsydcqbcb/',
          text: 'How Not !To Be Mentored',
        },
      },

      // PROJECTS - 2 completed
      {
        date: '2022',
        text: 'Revised my portfolio to its most current version',
        category: 'Projects',
        year: 2022,
        link: { url: 'https://developindvlpr.com/', text: 'portfolio' },
      },
      {
        date: 'December 2, 2022',
        text: 'Completed V1 of Burble',
        category: 'Projects',
        year: 2022,
        link: { url: 'https://theburble.netlify.app/', text: 'Burble' },
      },

      // ARTICLES - 2 completed
      {
        date: 'November 7, 2022',
        text: 'Published: Developer Networking Tools : A Brief IRL Edition',
        category: 'Articles',
        year: 2022,
        link: {
          url: 'https://developingdvlpr.com/blog/developer-networking-tools-a-brief-irl-edition',
          text: 'Developer Networking Tools',
        },
      },
      {
        date: 'November 27, 2022',
        text: 'Published: Now What - How To Keep Learning after Landing the 1st Tech Job',
        category: 'Articles',
        year: 2022,
        link: {
          url: 'https://developingdvlpr.com/blog/now-what-how-to-keep-learning-after-landing-the-1st-tech-job',
          text: 'Now What - Keep Learning',
        },
      },

      // MEDIA - 1 completed
      {
        date: 'June 2022',
        text: 'Featured: Dev.to Community Lightning Talk',
        category: 'Media',
        year: 2022,
        link: {
          url: 'https://www.youtube.com/@devto-community',
          text: 'Dev.to Community Lightning Talk',
        },
      },
    ],
  },
  {
    year: 2021,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 1, title: 'Articles', category: 'Articles' },
      { total: 5, completed: 1, title: 'Media', category: 'Media' },
    ],
    updates: [
      // ARTICLES - 1 completed
      {
        date: 'September 26, 2021',
        text: 'Published: 6 Strategies Learned from 6 months of Job Hunting',
        category: 'Articles',
        year: 2021,
        link: {
          url: 'https://developingdvlpr.com/blog/6-strategies-learned-from-6-months-of-job-hunting',
          text: '6 Strategies Learned'
        },
      },

      // MEDIA - 1 completed
      {
        date: 'October 2021',
        text: 'Lightning Talk: Leveraging Developer Community || Virtual Coffee',
        category: 'Media',
        year: 2021,
        link: {
          url: 'https://www.youtube.com/playlist?list=PLh9uT23TA65infGqUUaVibI0IssI0G6NY',
          text: 'Virtual Coffee Lightning Talk',
        },
      },
    ],
  },
  {
    year: 2020,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 1, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'February 25, 2020',
        text: 'Published: My Takeaways From Sit-Downs with Senior Devs',
        category: 'Articles',
        year: 2020,
        link: {
          url: 'https://developingdvlpr.com/blog/my-takeaways-from-sit-downs-with-senior-devs',
          text: 'My Takeaways From Senior Devs'
        },
      },
    ],
  },
  {
    year: 2019,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 4, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'October 1, 2019',
        text: 'Published: Sight beyond Sight - How Blind Software Engineers Make It Work',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/sight-beyond-sight-how-blind-software-engineers-make-it-work',
          text: 'Sight beyond Sight'
        },
      },
      {
        date: 'October 19, 2019',
        text: 'Published: Writing The Needed ReadMe',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/writing-the-needed-readme',
          text: 'Writing The Needed ReadMe'
        },
      },
      {
        date: 'October 30, 2019',
        text: 'Published: Hackathons - A Junior Developer\'s Growth Tool',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/hackathons-a-junior-developers-growth-tool',
          text: 'Hackathons Growth Tool'
        },
      },
      {
        date: 'December 20, 2019',
        text: 'Published: My #2Cents on How To Build A Beginner Friendly Developer Community',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/my-2cents-on-how-to-build-a-beginner-friendly-developer-community',
          text: 'Build Beginner Friendly Community'
        },
      },
    ],
  },
];

export const useProgressStore = defineStore('progress', {
  state: () => ({
    years: initialYears as YearlyData[],
  }),
  getters: {
    getYearData:
      (state) =>
      (year: number): YearlyData | undefined => {
        return state.years.find((y) => y.year === year);
      },
    calculateOverallProgress:
      (state) =>
      (year: number): number => {
        const yearData = state.years.find((y) => y.year === year);
        if (!yearData) return 0;
        const totalItems = yearData.items.reduce(
          (sum, item) => sum + item.total,
          0
        );
        const completedItems = yearData.items.reduce(
          (sum, item) => sum + item.completed,
          0
        );
        return totalItems > 0
          ? Math.round((completedItems / totalItems) * 100)
          : 0;
      },
    getCategoriesForYear:
      (state) =>
      (year: number): string[] => {
        const yearData = state.years.find((y) => y.year === year);
        if (!yearData) return [];
        return yearData.items.map((item) => item.category);
      },
    fetchProgressData: (state) => (): ProgressData => {
      // Get the current year or the most recent year with data
      const currentYear = new Date().getFullYear();
      const yearData =
        state.years.find((y) => y.year === currentYear) ||
        state.years.slice().sort((a, b) => b.year - a.year)[0];
      if (!yearData) {
        return { categories: [], updates: [] };
      }
      return {
        categories: yearData.items.map((item, index) => ({
          id: index + 1,
          ...item,
        })),
        updates: yearData.updates.map((update, index) => ({
          id: index + 1,
          ...update,
        })),
      };
    },
  },
  actions: {
    updateProgress(year: number, category: string, completed: number) {
      const yearData = this.years.find((y) => y.year === year);
      if (!yearData) return;
      const item = yearData.items.find((i) => i.category === category);
      if (item) {
        item.completed = Math.min(completed, item.total);
      }
    },
  },
});
