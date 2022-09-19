import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import {ArticleRoute} from '@helpers/common/interfaces';
import {ArticleImage} from './ArticleImage';
import {RouterLink} from './UI/RouterLink';

type FeedArticleProps = {
  article: ArticleRoute;
};

export const FeedArticle: React.FC<FeedArticleProps> = ({article}) => {
  const {t} = useTranslation();

  return (
    <Card component="article">
      <RouterLink to={article.path}>
        <CardActionArea>
          <ArticleImage
            imageSrc={article.largeImage}
            placeholderSrc={article.tinyImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {t(article.title)}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(article.teaser)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {t('common.read-more')}
          </Button>
        </CardActions>
      </RouterLink>
    </Card>
  );
};
