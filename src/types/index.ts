// src/types/index.ts

// =======================
// Core Base Interfaces
// =======================

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface BaseActivity extends BaseEntity {
  date: string;
  title: string;
  description: string;
}

// =======================
// Activity Types
// =======================

export type TalkStatus = 'accepted' | 'pending' | 'completed' | 'cancelled';
export type ProjectStatus = 'planning' | 'in-progress' | 'completed';
export type ArticleStatus = 'draft' | 'published' | 'updated';

export interface TalkActivity extends BaseActivity {
  type: 'talk';
  status: TalkStatus;
  event: string;
  eventUrl?: string;
  location?: string;
  audience?: string;
  resourceUrl?: string; // URL to slides
}

export interface ProjectActivity extends BaseActivity {
  type: 'project';
  status: ProjectStatus;
  projectUrl?: string;
  githubUrl?: string;
  technologies: string[];
  startDate?: string;
  completionDate?: string;
  collaborators?: string[];
}

export interface ArticleActivity extends BaseActivity {
  type: 'article';
  status: ArticleStatus;
  articleUrl?: string;
  publicationLocation?: string; // e.g., Personal blog, dev.to
  publishedDate?: string;
}

export type ActivityType = 'talk' | 'project' | 'article';
export type Activity = TalkActivity | ProjectActivity | ArticleActivity;

// =======================
// Progress Tracking
// =======================

export interface ProgressItem {
  title: string;
  category: string;
  total: number;
  completed: number;
  unit?: string; // e.g., 'hours', 'pages', 'tasks'
  lastUpdated?: string;
}

export interface ProgressMetrics {
  completionRate: number; // 0-100
  trend: 'increasing' | 'decreasing' | 'stable';
  estimatedCompletion?: string;
}

// =======================
// Timeline Types
// =======================

export interface TimelineLink {
  url: string;
  text: string;
  external?: boolean;
}

export interface TimelineUpdate {
  date: string;
  text: string;
  category: string;
  year: number;
  link?: TimelineLink;
  additionalText?: string;
  importance?: 'low' | 'medium' | 'high';
}

// =======================
// Data Aggregation
// =======================

export interface YearlyData {
  year: number;
  items: ProgressItem[];
  updates: TimelineUpdate[];
  notes?: string;
  recap?: string[];
}

export interface CategoryData {
  name: string;
  count: number;
  completionRate: number;
  items: ProgressItem[];
}

// Extended ProgressItem with id for UI purposes
export interface ProgressItemWithId extends ProgressItem {
  id: number;
}

// Extended TimelineUpdate with id for UI purposes
export interface TimelineUpdateWithId extends TimelineUpdate {
  id: number;
}

export interface ProgressData {
  categories: ProgressItemWithId[];
  updates: TimelineUpdateWithId[];
}

// =======================
// UI State Management
// =======================

export interface ThemeState {
  isDark: boolean;
  colorScheme: 'light' | 'dark' | 'system';
  toggleTheme: () => void;
  setColorScheme: (scheme: 'light' | 'dark' | 'system') => void;
}

export interface ViewState {
  currentView: 'grid' | 'list' | 'timeline';
  sortBy: 'date' | 'title' | 'status' | 'category';
  sortOrder: 'asc' | 'desc';
  itemsPerPage: number;
  currentPage: number;
}

// =======================
// API Response Types
// =======================

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// =======================
// Combined Data Interface
// =======================

export interface DashboardData {
  activities: Activity[];
  progress: ProgressData;
  timeline: TimelineUpdate[];
  stats: {
    totalActivities: number;
    completedActivities: number;
    activeProjects: number;
    upcomingTalks: number;
    publishedArticles: number;
  };
}

// =======================
// Utility Types
// =======================

export type ActivityStatus = TalkStatus | ProjectStatus | ArticleStatus;

// Type guards for runtime type checking
export const isTalkActivity = (activity: Activity): activity is TalkActivity =>
  activity.type === 'talk';

export const isProjectActivity = (activity: Activity): activity is ProjectActivity =>
  activity.type === 'project';

export const isArticleActivity = (activity: Activity): activity is ArticleActivity =>
  activity.type === 'article';

// Helper type for partial updates
export type PartialUpdate<T> = Partial<Omit<T, 'id' | 'createdAt'>> & {
  updatedAt: string;
};

// Type for creating new activities (without generated fields)
export type NewActivity<T extends Activity> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;

export type CreateTalkActivity = NewActivity<TalkActivity>;
export type CreateProjectActivity = NewActivity<ProjectActivity>;
export type CreateArticleActivity = NewActivity<ArticleActivity>;

// Basic Update interface for updateService usage
export interface Update {
  id: string;
  date: string;
  text: string;
  category?: string;
  [key: string]: any;
}
