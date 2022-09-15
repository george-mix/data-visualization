import React from 'react';
import {Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {TopTenChannelsChart} from './TopTenChannelsChart';

type TopTenChannelsProps = {
  data: YouTubeChannelData[];
  isLoading: boolean;
  isError: boolean;
}

export const TopTenChannels: React.FC<TopTenChannelsProps> = ({
  data,
  isLoading,
  isError,
}) => {
  const {t} = useTranslation();

  return (
    <>
      <Typography variant={'h6'} component={'h2'}>
        {t('youtube-channels.top-ten-channels.subheader')}
      </Typography>

      <SvgStatusProvider isLoading={isLoading} isError={isError}>
        <TopTenChannelsChart data={data} />
      </SvgStatusProvider>

      <Typography variant={'body1'} component={'p'}>
        {t('youtube-channels.top-ten-channels.first-paragraph')}
      </Typography>
      <Typography variant={'body1'} component={'p'}>
        {t('youtube-channels.top-ten-channels.second-paragraph')}
      </Typography>
    </>
  );
};
