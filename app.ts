// app.ts
import { activitiesStore } from './activities';

class ProgressTracker {
    private readonly progressCards: NodeListOf<Element>;
    private readonly observer: IntersectionObserver;

    constructor() {
        this.progressCards = document.querySelectorAll('.progress-card');
        this.observer = this.createIntersectionObserver();
        this.initialize();
    }

    private createIntersectionObserver(): IntersectionObserver {
        return new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-5');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px' }
        );
    }

    private initialize(): void {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateProgressCards();
            this.updateTotalProgress();
            this.displayUpdates();
            this.initializeAnimations();
        });
    }

    private updateProgressCards(): void {
        const categories = ['talks', 'projects', 'articles'];

        categories.forEach(category => {
            const progress = activitiesStore.getCategoryProgress(category);
            const completedElement = document.getElementById(`${category}-completed`);
            const totalElement = document.getElementById(`${category}-total`);

            if (completedElement && totalElement) {
                completedElement.textContent = progress.completed.toString();
                totalElement.textContent = progress.total.toString();
            }
        });
    }

    private updateTotalProgress(): void {
        const percentage = activitiesStore.getProgressPercentage();
        const totalProgressElement = document.getElementById('total-progress');

        if (totalProgressElement) {
            totalProgressElement.textContent = `${percentage}%`;
        }
    }

    private displayUpdates(): void {
        const container = document.getElementById('updates-container');
        if (!container) return;

        const recentUpdates = activitiesStore.getRecentUpdates();

        container.innerHTML = recentUpdates
            .map(update => this.createUpdateElement(update))
            .join('');
    }

    private createUpdateElement(update: any): string {
        const date = new Date(update.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div class="update-item">
                <div class="text-sm text-gray-600">${date}</div>
                <div class="mt-1">
                    <a href="${update.link}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-blue-600 hover:text-blue-800">
                        ${update.title || update.event}
                    </a>
                    ${update.description ? `<p class="mt-1 text-gray-700">${update.description}</p>` : ''}
                </div>
            </div>
        `;
    }

    private initializeAnimations(): void {
        this.progressCards.forEach(card => {
            card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-300');
            this.observer.observe(card);
        });
    }
}

new ProgressTracker();
