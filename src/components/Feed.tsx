import React from 'react';
import {Box, Typography} from '@mui/material';
import {FeedArticle} from './FeedArticle';
import {articleRoutes} from '@router/routes';

export const Feed: React.FC = () => (
  <Box component="section" role="feed">
    <Typography variant="h4" component="h2">
        Articles
    </Typography>
    {articleRoutes.map((article) => (
      <FeedArticle key={article.path} article={article}/>
    ))}
  </Box>
);

