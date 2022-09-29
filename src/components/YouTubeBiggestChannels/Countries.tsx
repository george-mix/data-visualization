import React from 'react';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {Figure} from '@components/UI/Figure';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';
import {ChannelQuantityChoroplethMap} from './ChannelQuantityChoroplethMap/ChannelQuantityChoroplethMap';
import {useWorldAtlas} from '@helpers/hooks/useWorldAtlas';

type CountriesProps = {
  data: YouTubeChannelData[];
  isLoading: boolean;
  isError: boolean;
}

export const Countries: React.FC<CountriesProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const [worldAtlas, isAtlasLoading, isAtlasError] = useWorldAtlas();

  return (
    <>
      <Subheader text="youtube-channels.countries.subheader" />

      <Figure caption="youtube-channels.countries.caption">
        <SvgStatusProvider
          isLoading={isLoading || isAtlasLoading}
          isError={isError || isAtlasError || !worldAtlas}
        >
          {
            worldAtlas && <ChannelQuantityChoroplethMap
              data={data}
              worldAtlas={worldAtlas}
            />
          }
        </SvgStatusProvider>
      </Figure>

      <Paragraph text="youtube-channels.countries.first-paragraph" />
    </>
  );
};
