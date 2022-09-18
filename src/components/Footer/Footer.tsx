import React from 'react';
import {
  Container,
  Grid,
} from '@mui/material';
import {SocialMediaList} from './SocialMediaList';
import {PageList} from './PageList';
import {CopyrightMessage} from './CopyrightMessage';

export const Footer: React.FC = () => (
  <Container
    component="footer"
    sx={{
      pb: 2,
      pt: 2,
    }}
  >
    <Grid container>
      <Grid item xs={6}>
        <SocialMediaList />
      </Grid>
      <Grid item xs={6}>
        <PageList />
      </Grid>
    </Grid>
    <CopyrightMessage />
  </Container>
);
