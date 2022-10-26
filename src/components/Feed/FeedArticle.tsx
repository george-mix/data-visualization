import React from 'react';
import {Card, CardContent} from '@mui/material';
import {ArticleRoute} from '@helpers/common/interfaces';
import {RouterLink} from '@components/UI/RouterLink';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {ArticleImage} from './ArticleImage';

type FeedArticleProps = {
  article: ArticleRoute;
};

export const FeedArticle: React.FC<FeedArticleProps> = ({article}) => (
  <Card
    component="article"
    sx={{
      mb: 4,
    }}
  >
    <RouterLink to={article.path}>
      <ArticleImage
        imageSrc={article.largeImage}
        placeholderSrc={article.tinyImage}
        alt={article.imageAlt}
      />
    </RouterLink>
    <CardContent
      sx={{
        bgcolor: 'background.default',
      }}
    >
      <RouterLink to={article.path}>
        <TranslatedTypography
          gutterBottom
          variant="h5"
          component="h3"
          translation={article.title}
        />
      </RouterLink>
      <RouterLink to={article.path}>
        <TranslatedTypography
          variant="body1"
          color="text.secondary"
          translation={article.teaser}
        />
      </RouterLink>
    </CardContent>
  </Card>
);
