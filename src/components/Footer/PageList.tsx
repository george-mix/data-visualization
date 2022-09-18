import React from 'react';
import {Link, List, ListItem, ListItemText} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {mainRoutes} from '@router/routes';

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
            <Link
              component={RouterLink}
              to={route.path}
              underline="none"
              sx={{
                '& :hover': {
                  color: 'primary.light',
                },
              }}
            >
              <ListItemText
                primary={t(`${route.title}`)}
                sx={{color: 'text.primary'}}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};
