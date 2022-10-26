import React from 'react';
import {Box} from '@mui/material';
import {articleRoutes} from '@router/routes';
import {FeedArticle} from './FeedArticle';
import {Subheader} from '@components/UI/Subheader';

export const Feed: React.FC = () => (
  <Box component="section" role="feed">
    <Subheader text="Articles" />

    {articleRoutes.map((article) => (
      <FeedArticle key={article.path} article={article}/>
    ))}
  </Box>
);
