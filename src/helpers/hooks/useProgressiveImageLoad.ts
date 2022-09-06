import {useEffect, useState} from 'react';

type UseProgressiveImageLoad = (_imageSrc: string, _placeholderSrc?: string) => [string, boolean];

export const useProgressiveImageLoad: UseProgressiveImageLoad = (
  imageSrc,
  placeholderSrc = imageSrc,
) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setIsLoading(false);
      setImgSrc(imageSrc);
    };
  }, [imageSrc]);

  return [imgSrc, isLoading];
};
