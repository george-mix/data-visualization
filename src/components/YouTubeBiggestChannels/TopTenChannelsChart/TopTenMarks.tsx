import React from 'react';
import {ScaleBand, ScaleLinear} from 'd3';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {SvgRect} from '@components/ChartElements/General/SvgRect';

type TopTenMarksProps = {
  topTenChannels: YouTubeChannelData[];
  yScale: ScaleBand<string>;
  xScale: ScaleLinear<number, number, never>;
}

export const TopTenMarks: React.FC<TopTenMarksProps> = ({topTenChannels, yScale, xScale}) => (
  <>
    {topTenChannels.map((channel) => (
      <SvgRect
        key={channel.channelName}
        y={yScale(channel.channelName)}
        width={xScale(channel.subscribers)}
        height={yScale.bandwidth()}
      />
    ))}
  </>
);
