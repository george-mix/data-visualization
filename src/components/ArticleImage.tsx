import React from 'react';
import {CardMedia} from '@mui/material';
import {useProgressiveImageLoad} from '@helpers/hooks/useProgressiveImageLoad';

type ArticleImageProps = {
  imageSrc: string;
  placeholderSrc: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  imageSrc,
  placeholderSrc,
}) => {
  const [imageSource, isLoading] = useProgressiveImageLoad(imageSrc, placeholderSrc);

  return (
    <CardMedia
      component="img"
      height="140"
      image={imageSource}
      alt="article preview"
      sx={{
        filter: isLoading ? 'blur(10px)' : 'blur(0px)',
        transition: 'filter 0.5s linear',
        clipPath: isLoading ? 'inset(0)' : 'none',
      }}
    />
  );
};

