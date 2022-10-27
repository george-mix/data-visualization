import {useDispatch, useSelector} from 'react-redux';
import {themeSelector} from '@store/theme/themeSelectors';
import {changeThemeMode} from '@store/theme/themeSlice';
import {toggleThemeMode} from '@helpers/functions/themeUtils';

export const useThemeMode = () => {
  const {mode: themeMode} = useSelector(themeSelector);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newThemeMode = toggleThemeMode(themeMode);
    dispatch(changeThemeMode(newThemeMode));
  };

  return {themeMode, handleThemeChange};
};
