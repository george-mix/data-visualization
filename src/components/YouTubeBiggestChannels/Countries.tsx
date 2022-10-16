import React from 'react';
import {Figure} from '@components/UI/Figure';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';
import {ChannelQuantityChoroplethMap} from './ChannelQuantityChoroplethMap/ChannelQuantityChoroplethMap';

export const Countries: React.FC = () => (
  <>
    <Subheader text="youtube-channels.countries.subheader" />

    <Figure caption="youtube-channels.countries.caption">
      <ChannelQuantityChoroplethMap />
    </Figure>

    <Paragraph text="youtube-channels.countries.first-paragraph" />
  </>
);
