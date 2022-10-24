import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import drawerReducer from './drawer/drawerSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
