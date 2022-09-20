import React from 'react';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {TopTenChannelsChart} from './TopTenChannelsChart';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';
import {Figure} from '@components/UI/Figure';

type TopTenChannelsProps = {
  data: YouTubeChannelData[];
  isLoading: boolean;
  isError: boolean;
}

export const TopTenChannels: React.FC<TopTenChannelsProps> = ({
  data,
  isLoading,
  isError,
}) => (
  <>
    <Subheader
      text="youtube-channels.top-ten-channels.subheader"
    />

    <Figure caption="youtube-channels.top-ten-channels.caption">
      <SvgStatusProvider isLoading={isLoading} isError={isError}>
        <TopTenChannelsChart data={data} />
      </SvgStatusProvider>
    </Figure>

    <Paragraph
      text="youtube-channels.top-ten-channels.first-paragraph"
    />
    <Paragraph
      text="youtube-channels.top-ten-channels.second-paragraph"
    />
  </>
);
