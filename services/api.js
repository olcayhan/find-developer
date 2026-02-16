import jobs from '../mock/jobs.json';
import user from '../mock/user.json';

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
    jobs: {
        getAll: async () => {
            await delay(500);
            return jobs;
        },
        getById: async (id) => {
            await delay(300);
            return jobs.find((job) => job.id === id);
        },
        search: async (query) => {
            await delay(500);
            if (!query) return jobs;
            const lowerQuery = query.toLowerCase();
            return jobs.filter(job =>
                job.title.toLowerCase().includes(lowerQuery) ||
                job.company.toLowerCase().includes(lowerQuery) ||
                job.location.toLowerCase().includes(lowerQuery)
            );
        }
    },
    user: {
        getProfile: async () => {
            await delay(400);
            return user;
        },
        updateProfile: async (data) => {
            await delay(600);
            return { ...user, ...data };
        }
    },
};
