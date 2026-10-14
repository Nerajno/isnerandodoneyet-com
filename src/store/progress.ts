import { defineStore } from 'pinia';
import type { YearlyData, ProgressData } from '../types';
import { initialYears } from '../data/years';

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
