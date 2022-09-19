import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {AppRoute} from '@helpers/common/interfaces';
import {RouterLink} from '@components/UI/RouterLink';

export const NavList: React.FC<{
  routes: AppRoute[]
}> = ({routes}) => {
  const {t} = useTranslation();

  return (
    <List>
      {routes.map((route) => (
        <ListItem button key={route.title}>
          <ListItemIcon>
            {<route.icon sx={{color: 'primary.light'}}/>}
          </ListItemIcon>
          <RouterLink to={route.path}>
            <ListItemText primary={t(`${route.title}`)} />
          </RouterLink>
        </ListItem>
      ))}
    </List>
  );
};
