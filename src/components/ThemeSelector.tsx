import React from 'react';
import {IconButton} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useThemeMode} from '@helpers/hooks/useThemeMode';

export const ThemeSelector: React.FC = () => {
  const {themeMode, handleThemeChange} = useThemeMode();

  return (
    <IconButton onClick={handleThemeChange}>
      {themeMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
