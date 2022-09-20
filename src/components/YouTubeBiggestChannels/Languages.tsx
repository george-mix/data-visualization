import React from 'react';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {LanguagePercentageChart} from './LanguagePercentageChart/LanguagePercentageChart';
import {Figure} from '@components/UI/Figure';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';

type LanguagesProps = {
  data: YouTubeChannelData[];
  isLoading: boolean;
  isError: boolean;
}

export const Languages: React.FC<LanguagesProps> = ({
  data,
  isLoading,
  isError,
}) => (
  <>
    <Subheader text="youtube-channels.languages.subheader" sx={{pb: 0}}/>

    <Figure caption="youtube-channels.languages.caption">
      <SvgStatusProvider isLoading={isLoading} isError={isError}>
        <LanguagePercentageChart data={data}/>
      </SvgStatusProvider>
    </Figure>

    <Paragraph text="youtube-channels.languages.first-paragraph" />
    <Paragraph text="youtube-channels.languages.second-paragraph" />
    <Paragraph text="youtube-channels.languages.third-paragraph" />
  </>
);
