import React from 'react';
import {Grid, useMediaQuery, useTheme} from '@mui/material';
import {PageHeader} from '@components/PageHeader/PageHeader';
import {Feed} from '@components/Feed/Feed';
import {Paragraph} from '@components/UI/Paragraph';
import {Quote} from '@components/UI/Quote';

const Home: React.FC = () => {
  const theme = useTheme();
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <PageHeader headline="home.hero-section.header" />

      {
        isDownSmall && <>
          <Paragraph text="home.hero-section.welcome-message" />
          <Quote text="home.hero-section.quote" author="home.hero-section.quote-author" />
          <Paragraph text="home.hero-section.description" />
        </>
      }

      {
        !isDownSmall && <Grid container spacing={2}>
          <Grid item xs={7}>
            <Paragraph text="home.hero-section.welcome-message" />
            <Paragraph text="home.hero-section.description" />
          </Grid>
          <Grid item xs={5}>
            <Quote text="home.hero-section.quote" author="home.hero-section.quote-author" />
          </Grid>
        </Grid>
      }

      <Feed />
    </>
  );
};

export default Home;
