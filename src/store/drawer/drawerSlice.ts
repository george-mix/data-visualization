import {createSlice} from '@reduxjs/toolkit';
import {DrawerState} from './drawerTypes';

const initialState: DrawerState = {
  isOpen: false,
};

export const drawerSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {toggleDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;
