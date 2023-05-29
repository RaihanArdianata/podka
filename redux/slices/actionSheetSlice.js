import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sheetType: 0,
  open: false,
  data: null,
  snapPoints: ['25%', '50%', '100%'],
};

export const sheetSlice = createSlice({
  name: "actionSheet",
  initialState,
  reducers: {
    openCommentModal: (state, { payload }) => ({ ...state, ...payload }),
    clearCommentModal: (state) => {
      state = initialState;
    }
  }
});

export const { clearCommentModal, openCommentModal } = sheetSlice.actions;
export const selectSheet = ({ actionSheet }) => actionSheet;
export default sheetSlice.reducer;