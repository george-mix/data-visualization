import {useDispatch, useSelector} from 'react-redux';
import {themeModeSelector} from '@store/theme/themeSelectors';
import {changeThemeMode} from '@store/theme/themeSlice';
import {ThemeMode} from '@store/theme/themeTypes';

export const useThemeMode = () => {
  const themeMode = useSelector(themeModeSelector);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeMode(newTheme));
  };

  return {themeMode, handleThemeChange};
};
