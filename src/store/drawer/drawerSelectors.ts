import {RootState} from '../store';

export const drawerStateSelector = (state: RootState) => state.drawer.isOpen;
