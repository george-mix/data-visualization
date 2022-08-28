import React from 'react';
import {Box, Container, Divider, Typography} from '@mui/material';
import {SocialMediaLinks} from './SocialMediaLinks';
import {useTranslation} from 'react-i18next';

export const HeroSection: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Box sx={{pt: 12, pb: 12}}>
        <Typography style={{fontWeight: 300}} variant={'h3'} component={'h1'}>
          {t('home.hero-section.header')}
        </Typography>
        <Divider sx={{pt: 6, pb: 6}}>
          <SocialMediaLinks />
        </Divider>
        <Typography variant={'body1'} component={'p'}>
          {t('home.hero-section.first-subheader')}
        </Typography>
        <Typography variant={'body1'} component={'p'}>
          {`"${t('home.hero-section.quote')}" - ${t('home.hero-section.quote-author')}`}
        </Typography>
        <Typography variant={'body1'} component={'p'}>
          {t('home.hero-section.second-subheader')}
        </Typography>
      </Box>
    </Container>
  );
};
