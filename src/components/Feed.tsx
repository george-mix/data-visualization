import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import {FeedArticle} from './FeedArticle';
import {articles} from '@common/data';

export const Feed: React.FC = () => (
  <Container>
    <Box component="section" role="feed">
      <Typography variant="h4" component="h2">
        Articles
      </Typography>
      {articles.map((article) => (
        <FeedArticle key={article.path} article={article}/>
      ))}
    </Box>
  </Container>
);

