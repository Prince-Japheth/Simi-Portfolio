import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  scrollProgress: number;
  isMobileMenuOpen: boolean;
  activeSection: string;
  error: {
    hasError: boolean;
    message: string;
  } | null;
}

const initialState: UIState = {
  scrollProgress: 0,
  isMobileMenuOpen: false,
  activeSection: 'home',
  error: null,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = {
        hasError: true,
        message: action.payload,
      };
      console.warn(`[UI Store Error]: ${action.payload}`);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setScrollProgress,
  toggleMobileMenu,
  setMobileMenuOpen,
  setActiveSection,
  setError,
  clearError,
} = uiSlice.actions;

export default uiSlice.reducer;
