import React from 'react';
import {IconButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeMode} from '@store/theme/themeSlice';
import {themeModeSelector} from '@store/theme/themeSelectors';
import {ThemeMode} from '@store/theme/themeTypes';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeSelector: React.FC = () => {
  const themeMode = useSelector(themeModeSelector);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme: ThemeMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeMode(newTheme));
  };

  return (
    <IconButton onClick={handleThemeChange}>
      {themeMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
