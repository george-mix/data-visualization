import React from 'react';
import {Card, CardContent, useMediaQuery, useTheme} from '@mui/material';
import {ArticleRoute} from '@helpers/common/interfaces';
import {RouterLink} from '@components/UI/RouterLink';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';
import {ArticleImage} from './ArticleImage';

type FeedArticleProps = {
  article: ArticleRoute;
};

export const FeedArticle: React.FC<FeedArticleProps> = ({article}) => {
  const theme = useTheme();
  const isUpMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card
      component="article"
      sx={{
        height: '100%',
        display: isUpMedium ? 'flex' : undefined,
        bgcolor: 'background.default',
        backgroundImage: 'none',
      }}
    >
      <RouterLink to={article.path} sx={{flex: '1 1 35%'}}>
        <ArticleImage
          imageSrc={article.largeImage}
          placeholderSrc={article.tinyImage}
          alt={article.imageAlt}
        />
      </RouterLink>
      <CardContent
        sx={{
          bgcolor: 'background.default',
          flex: '1 1 65%',
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
};
