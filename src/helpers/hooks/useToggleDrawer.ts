import {useDispatch, useSelector} from 'react-redux';
import {drawerSelector} from '@store/drawer/drawerSelectors';
import {toggleDrawer} from '@store/drawer/drawerSlice';

export const useToggleDrawer = () => {
  const {isOpen: isDrawerOpen} = useSelector(drawerSelector);
  const dispatch = useDispatch();

  const toggleDrawerState = () => {
    dispatch(toggleDrawer());
  };

  return {isDrawerOpen, toggleDrawerState};
};
