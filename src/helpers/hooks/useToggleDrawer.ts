import {useDispatch, useSelector} from 'react-redux';
import {drawerStateSelector} from '@store/drawer/drawerSelectors';
import {toggleDrawer} from '@store/drawer/drawerSlice';

export const useToggleDrawer = () => {
  const isDrawerOpen = useSelector(drawerStateSelector);
  const dispatch = useDispatch();

  const toggleDrawerState = () => {
    dispatch(toggleDrawer());
  };

  return {isDrawerOpen, toggleDrawerState};
};
