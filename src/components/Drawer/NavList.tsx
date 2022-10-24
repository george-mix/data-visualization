import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {AppRoute} from '@helpers/common/interfaces';
import {RouterLink} from '@components/UI/RouterLink';

type NavListProps = {
  routes: AppRoute[];
}

export const NavList: React.FC<NavListProps> = ({routes}) => {
  const {t} = useTranslation();

  return (
    <List>
      {routes.map((route) => (
        <ListItem button key={route.title}>
          <RouterLink
            to={route.path}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ListItemIcon>
              {<route.icon sx={{color: 'primary.light'}} />}
            </ListItemIcon>
            <ListItemText primary={t(`${route.title}`)} />
          </RouterLink>
        </ListItem>
      ))}
    </List>
  );
};
