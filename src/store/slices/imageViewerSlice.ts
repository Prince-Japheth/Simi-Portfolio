import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageViewerState {
  isOpen: boolean;
  imageSrc: string | null;
  altText: string;
}

const initialState: ImageViewerState = {
  isOpen: false,
  imageSrc: null,
  altText: '',
};

export const imageViewerSlice = createSlice({
  name: 'imageViewer',
  initialState,
  reducers: {
    openImageViewer: (state, action: PayloadAction<{ src: string; alt?: string }>) => {
      state.isOpen = true;
      state.imageSrc = action.payload.src;
      state.altText = action.payload.alt || 'Preview';
    },
    closeImageViewer: (state) => {
      state.isOpen = false;
      state.imageSrc = null;
      state.altText = '';
    },
  },
});

export const { openImageViewer, closeImageViewer } = imageViewerSlice.actions;

export default imageViewerSlice.reducer;
