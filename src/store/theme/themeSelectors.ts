import {RootState} from '../store';

export const themeModeSelector = (state: RootState) => state.theme.mode;
