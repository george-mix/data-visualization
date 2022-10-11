import React from 'react';
import {Box, List, ListItem, ListItemText} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {mainRoutes} from '@router/routes';
import {RouterLink} from '@components/UI/RouterLink';
import {FooterCategorySubheader} from './FooterCategorySubheader';

export const PageList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Box>
      <FooterCategorySubheader text="common.pages" />
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
    </Box>
  );
};
