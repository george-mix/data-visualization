import React from 'react';
import {
  Box,
  Container,
  Divider,
} from '@mui/material';
import {SocialMediaList} from './SocialMediaList';
import {PageList} from './PageList';
import {CopyrightMessage} from './CopyrightMessage';

export const Footer: React.FC = () => (
  <>
    <Container
      component="footer"
      sx={{
        pb: 2,
      }}
    >
      <Divider sx={{mb: 4}} />
      <Box sx={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <SocialMediaList />
        <PageList />
      </Box>
      <CopyrightMessage />
    </Container>
  </>
);
