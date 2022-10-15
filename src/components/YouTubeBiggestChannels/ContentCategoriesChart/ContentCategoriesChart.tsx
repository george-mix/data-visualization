import React from 'react';
import {useYouTubeData} from '@helpers/hooks/useYouTubeData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {ContentCategoriesSvg} from './ContentCategoriesSvg';

export const ContentCategoriesChart: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();

  return (
    <SvgStatusProvider isLoading={isLoading} isError={isError}>
      <ContentCategoriesSvg data={youtubeCahnnelsData} />
    </SvgStatusProvider>
  );
};
