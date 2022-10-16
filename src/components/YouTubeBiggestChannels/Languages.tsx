import React from 'react';
import {LanguagePercentageChart} from './LanguagePercentageChart/LanguagePercentageChart';
import {Figure} from '@components/UI/Figure';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';

export const Languages: React.FC = () => (
  <>
    <Subheader text="youtube-channels.languages.subheader" />

    <Figure caption="youtube-channels.languages.caption">
      <LanguagePercentageChart />
    </Figure>

    <Paragraph text="youtube-channels.languages.first-paragraph" />
    <Paragraph text="youtube-channels.languages.second-paragraph" />
    <Paragraph text="youtube-channels.languages.third-paragraph" />
  </>
);
