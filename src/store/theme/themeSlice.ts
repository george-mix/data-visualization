import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ThemeMode, ThemeState} from './themeTypes';
import {lightThemeColorSchemes} from '@helpers/common/data';
import {toggleThemeColorSchemes} from '@helpers/functions/themeUtils';

const initialState: ThemeState = {
  mode: 'light',
  colorSchemes: lightThemeColorSchemes,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      state.colorSchemes = toggleThemeColorSchemes(action.payload);
    },
  },
});

export const {changeThemeMode} = themeSlice.actions;
export default themeSlice.reducer;
