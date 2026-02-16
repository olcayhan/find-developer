import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    // Add other fields
}

interface UserState {
    profile: UserProfile | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    profile: null,
    isAuthenticated: false, // For demo purposes, we can toggle this
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserProfile>) {
            state.profile = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.profile = null;
            state.isAuthenticated = false;
        },
        updateProfile(state, action: PayloadAction<Partial<UserProfile>>) {
            if (state.profile) {
                state.profile = { ...state.profile, ...action.payload };
            }
        },
    },
});

export const { setUser, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
