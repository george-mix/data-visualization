import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {ArticleInfo} from '@helpers/common/interfaces';

type FeedArticleProps = {
  article: ArticleInfo;
};

export const FeedArticle: React.FC<FeedArticleProps> = ({article}) => {
  const {t} = useTranslation();

  return (
    <Card component="article">
      <Link to={article.path}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={article.image}
            alt="article preview"
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
      </Link>
    </Card>
  );
};
