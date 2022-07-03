// activities.ts
export interface Activity {
    id: string;
    title?: string;
    event?: string;
    date: string;
    link: string;
    status?: 'completed' | 'pending' | 'cancelled';
    description?: string;
    type?: string;
}

export interface CategoryGoals {
    talks: number;
    projects: number;
    articles: number;
}

export interface CategoryProgress {
    completed: number;
    total: number;
    percentage: number;
}

class ActivitiesStore {
    private readonly totalGoals: CategoryGoals = {
        talks: 7,
        projects: 7,
        articles: 7
    };

    private activities: {
        talks: Activity[];
        projects: Activity[];
        articles: Activity[];
        submissions: Activity[];
        acceptances: Activity[];
    };

    constructor() {
        // Initialize with your existing data
        this.activities = {
            talks: [/* your existing talks data */],
            projects: [/* your existing projects data */],
            articles: [/* your existing articles data */],
            submissions: [/* your existing submissions data */],
            acceptances: [/* your existing acceptances data */]
        };
    }

    getCompletedCount(category: keyof CategoryGoals): number {
        return this.activities[category]?.filter(item => item.status === "completed").length || 0;
    }

    getAllActivitiesByDate(): Activity[] {
        const allActivities = Object.values(this.activities).flat();
        return allActivities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    getProgressPercentage(): number {
        const categoriesProgress = Object.keys(this.totalGoals).map(category =>
            this.getCategoryProgress(category as keyof CategoryGoals)
        );

        const totalCompleted = categoriesProgress.reduce((sum, curr) => sum + curr.completed, 0);
        const totalGoal = categoriesProgress.reduce((sum, curr) => sum + curr.total, 0);

        return Math.round((totalCompleted / totalGoal) * 100);
    }

    getCategoryProgress(category: keyof CategoryGoals): CategoryProgress {
        const completed = this.getCompletedCount(category);
        const total = this.totalGoals[category];

        return {
            completed,
            total,
            percentage: Math.round((completed / total) * 100)
        };
    }

    getRecentUpdates(limit: number = 5): Activity[] {
        return this.getAllActivitiesByDate()
            .filter(activity => activity.status === 'completed')
            .slice(0, limit);
    }
}

export const activitiesStore = new ActivitiesStore();
