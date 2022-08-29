import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';
import {AppRoute} from '@common/interfaces';
import {useTranslation} from 'react-i18next';

export const NavList: React.FC<{
  routes: AppRoute[]
}> = ({routes}) => {
  const {t} = useTranslation();

  return (
    <List>
      {routes.map((route) => (
        <ListItem button key={route.name}>
          <Link to={route.path}>
            <ListItemText primary={t(`${route.name}`)} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
