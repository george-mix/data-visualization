import React from 'react';
import {ListItem, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {mainRoutes} from '@router/routes';
import {RouterLink} from '@components/UI/RouterLink';

export const MainRouteLinks: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      {mainRoutes.map((route) => (
        <ListItem
          key={route.title}
          disableGutters
          component="li"
        >
          <RouterLink
            to={route.path}
            sx={{
              '& :hover': {
                color: 'primary.light',
              },
            }}
          >
            <ListItemText primary={t(`${route.title}`)} />
          </RouterLink>
        </ListItem>
      ))}
    </>
  );
};
