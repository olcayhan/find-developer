import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  logo: string;
  // Add other fields as necessary
}

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  filteredJobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
  filteredJobs: [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    filterJobs(state, action: PayloadAction<string>) {
      const query = action.payload.toLowerCase();
      state.filteredJobs = state.jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query)
      );
    },
  },
});

export const { setJobs, setLoading, setError, filterJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
