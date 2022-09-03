import React from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {mainRoutes} from '@router/routes';
import {socialMediaList} from '@helpers/common/data';

export const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
    <footer>
      <Container sx={{pb: 4, pt: 4}}>
        <Grid container>
          <Grid item xs={6}>
            <Typography component="h2" variant="subtitle2">
              {t('common.contacts')}
            </Typography>
            <List>
              {socialMediaList.map((media) => (
                <ListItem button key={media.name}>
                  <a href={media.link}>
                    <ListItemText primary={t(`${media.name}`)} />
                  </a>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h2" variant="subtitle2">
              {t('common.pages')}
            </Typography>
            <List>
              {mainRoutes.map((route) => (
                <ListItem button key={route.name}>
                  <Link to={route.path}>
                    <ListItemText primary={t(`${route.name}`)} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Typography component="p" variant="body2">
           ©2022
        </Typography>
      </Container>
    </footer>
  );
};
