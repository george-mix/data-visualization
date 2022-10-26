import {useDispatch, useSelector} from 'react-redux';
import {themeSelector} from '@store/theme/themeSelectors';
import {changeThemeMode} from '@store/theme/themeSlice';
import {ThemeMode} from '@store/theme/themeTypes';

export const useThemeMode = () => {
  const {mode: themeMode} = useSelector(themeSelector);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeMode(newTheme));
  };

  return {themeMode, handleThemeChange};
};
