export interface GoalProgress {
    completed: number;
    total: number;
    label: string;
  }

  export interface ProgressUpdate {
    date: string;
    text: string;
    links?: Array<{
      text: string;
      url: string;
    }>;
  }

  export interface YearData {
    year: number;
    progress: number;
    goals?: GoalProgress[];
    updates?: ProgressUpdate[];
  }

  const data: Record<string, YearData> = {
    '2022': {
      year: 2022,
      progress: 24,
      goals: [
        { completed: 4, total: 7, label: 'Talks' },
        { completed: 2, total: 7, label: 'Projects' },
        { completed: 0, total: 7, label: 'Articles' }
      ],
      updates: [
        {
          date: 'April 1, 2022',
          text: 'Created a list of talks on',
          links: [{ text: 'Sessionize', url: 'https://sessionize.com/Nerajno' }]
        },
        {
          date: 'August 12, 2022',
          text: 'Updated a list of talks on',
          links: [{ text: 'PaperCall', url: 'https://www.papercall.io/speakers/45142' }]
        },
        {
          date: 'April 28, 2022',
          text: 'Talk accepted to',
          links: [{ text: 'MagnoliaJS', url: 'https://www.MagnoliaJS.com/' }]
        },
        {
          date: 'July 3, 2022',
          text: 'Talk accepted to',
          links: [{ text: 'Refactr', url: 'https://www.refactr.tech/' }]
        },
        {
          date: 'July 30, 2022',
          text: 'Talk accepted to',
          links: [{ text: 'AtlDevCon 2022', url: 'https://www.atldevcon.com/' }]
        },
        {
          date: 'August 13, 2022',
          text: 'Talk accepted to',
          links: [{ text: 'Prairie Dev Con', url: 'https://www.prairiedevcon.com/' }]
        },
        {
          date: 'September 25, 2022',
          text: 'Spoke at MagnoliaJS and AtlDevCon 2022 in the week of September 11-17, 2022.',
          links: []
        },
        {
          date: 'September 25, 2022',
          text: 'Speaking at',
          links: [{ text: 'ATLJUG', url: 'https://www.meetup.com/atlantajug/' }]
        },
        {
          date: 'November 2022',
          text: 'Revised my portfolio to its most current version.',
          links: [{ text: 'portfolio', url: 'https://developindvlpr.com/' }]
        },
        {
          date: 'November 9, 2022',
          text: 'Gave my talk on Open-Sourced Learning at ConnectTech2022.',
          links: [{ text: 'Open-Sourced Learning', url: 'https://twitter.com/nerajno/status/1591142693820067840?s=20&t=wbDw7NqFSwXBSTc6U6ldYg' }]
        },
        {
          date: 'December 1, 2022',
          text: 'Gave a lighting talk on How Not To Be Mentored at Software Crafters Atlanta Meeting.',
          links: [{ text: 'How Not To Be Mentored', url: 'https://www.meetup.com/software-craftsmanship-atlanta/events/cbtsxsydcqbcb/' }]
        },
        {
          date: 'December 2, 2022',
          text: 'Completed V1 of',
          links: [{ text: 'Burble', url: 'https://theburble.netlify.app/' }]
        },
        {
          date: 'November 27, 2022',
          text: 'Wrote',
          links: [{ text: 'Tips on How To Keep Learning after Landing the 1st Tech Job', url: 'https://dev.to/nerajno/now-what-how-to-keep-learning-after-landing-the-1st-tech-job-3nhj' }]
        }
      ]
    },
    '2023': {
      year: 2023,
      progress: 45,
      goals: []
    },
    '2024': {
      year: 2024,
      progress: 0,
      goals: [
        { completed: 0, total: 7, label: 'Talks' },
        { completed: 0, total: 7, label: 'Projects' },
        { completed: 0, total: 7, label: 'Articles' }
      ]
    }
  };

  export default data;
