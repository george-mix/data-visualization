import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ThemeMode, ThemeState} from './themeTypes';

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const {changeThemeMode} = themeSlice.actions;
export default themeSlice.reducer;
