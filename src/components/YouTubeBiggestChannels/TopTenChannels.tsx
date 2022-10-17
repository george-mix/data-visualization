import React from 'react';
import {TopTenChannelsChart} from './TopTenChannelsChart/TopTenChannelsChart';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';
import {Figure} from '@components/UI/Figure';

export const TopTenChannels: React.FC = () => (
  <>
    <Subheader
      text="youtube-channels.top-ten-channels.subheader"
    />

    <Figure caption="youtube-channels.top-ten-channels.caption">
      <TopTenChannelsChart />
    </Figure>

    <Paragraph
      text="youtube-channels.top-ten-channels.first-paragraph"
    />
    <Paragraph
      text="youtube-channels.top-ten-channels.second-paragraph"
    />
  </>
);
