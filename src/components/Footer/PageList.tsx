import React from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {mainRoutes} from '@router/routes';
import {RouterLink} from '@components/UI/RouterLink';

export const PageList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      <TranslatedTypography
        translation="common.pages"
        component="h2"
        variant="h6"
        sx={{
          color: 'primary.main',
        }}
      />
      <List>
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
      </List>
    </>
  );
};
