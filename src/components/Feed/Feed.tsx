import React from 'react';
import {Box, Grid} from '@mui/material';
import {articleRoutes} from '@router/routes';
import {FeedArticle} from './FeedArticle';
import {Subheader} from '@components/UI/Subheader';

export const Feed: React.FC = () => (
  <Box component="section" role="feed" pb={2}>
    <Subheader text="common.articles" />

    <Grid container spacing={4}>
      {articleRoutes.map((article) => (
        <Grid item key={article.path} sm={6}>
          <FeedArticle key={article.path} article={article}/>
        </Grid>
      ))}
    </Grid>
  </Box>
);
