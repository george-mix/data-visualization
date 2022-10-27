import {useDispatch, useSelector} from 'react-redux';
import {themeSelector} from '@store/theme/themeSelectors';
import {changeThemeMode} from '@store/theme/themeSlice';
import {toggleThemeMode} from '@helpers/functions/themeUtils';
import {getItem, setItem} from '@helpers/services/localStorage';

export const useThemeMode = () => {
  const {mode} = useSelector(themeSelector);
  const dispatch = useDispatch();
  const themeMode = mode;

  const savedThemeMode = getItem('themeMode');
  if (!savedThemeMode) {
    setItem('themeMode', mode);
  }

  if (savedThemeMode && savedThemeMode !== mode) {
    dispatch(changeThemeMode(savedThemeMode));
  }

  const handleThemeChange = () => {
    const newThemeMode = toggleThemeMode(themeMode);
    setItem('themeMode', newThemeMode);
    dispatch(changeThemeMode(newThemeMode));
  };

  return {themeMode, handleThemeChange};
};
