import React from 'react';
import {CardMedia, useMediaQuery, useTheme} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useProgressiveImageLoad} from '@helpers/hooks/useProgressiveImageLoad';

type ArticleImageProps = {
  imageSrc: string;
  placeholderSrc: string;
  alt: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  imageSrc,
  placeholderSrc,
  alt,
}) => {
  const {t} = useTranslation();
  const [imageSource, isLoading] = useProgressiveImageLoad(imageSrc, placeholderSrc);
  const theme = useTheme();
  const isUpMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <CardMedia
      component="img"
      image={imageSource}
      height={isUpMedium ? '100%' : 180}
      alt={t(alt)}
      sx={{
        filter: isLoading ? 'blur(10px)' : 'blur(0px)',
        transition: 'filter 0.5s linear',
        clipPath: isLoading ? 'inset(0)' : 'none',
        width: '100%',
      }}
    />
  );
};
