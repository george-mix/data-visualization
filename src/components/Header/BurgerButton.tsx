import React from 'react';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useToggleDrawer} from '@helpers/hooks/useToggleDrawer';

export const BurgerButton: React.FC = () => {
  const {toggleDrawerState} = useToggleDrawer();

  return (
    <IconButton
      aria-label="open nav"
      onClick={toggleDrawerState}
      sx={{
        p: 0,
        color: 'text.primary',
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};
