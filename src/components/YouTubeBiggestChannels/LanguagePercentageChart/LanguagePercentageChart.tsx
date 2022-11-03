import React from 'react';
import {useYouTubeData} from '@helpers/queries/useYouTubeData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {LanguagePercentageSvg} from './LanguagePercentageSvg';
import {ChartControls} from './ChartControls';
import {useChangeLanguageInfo} from './useChangeLanguageInfo';

export const LanguagePercentageChart: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();
  const {
    languageData,
    getText,
    switchQuantitySource,
    infoType,
  } = useChangeLanguageInfo(youtubeCahnnelsData);

  return (
    <SvgStatusProvider isLoading={isLoading} isError={isError}>
      <LanguagePercentageSvg languageData={languageData} getText={getText} />
      <ChartControls infoType={infoType} switchQuantitySource={switchQuantitySource} />
    </SvgStatusProvider>
  );
};
