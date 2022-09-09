import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Container, Divider, Typography} from '@mui/material';
import {SocialMediaLinks} from '@components/SocialMediaLinks';
import {SourceLink} from '@components/UI/SourceLink';
import {TopTenChannels} from '@components/YouTubeBiggestChannels/TopTenChannels';
import {useYouTubeData} from '@helpers/hooks/useYouTubeData';
import {SourceArticleList} from '@helpers/common/enums';

const YouTubeBiggestChannels: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();
  const {t} = useTranslation();

  return (
    <Container>
      <Box sx={{pt: 12, pb: 12}} component="article" role="article">
        <Typography style={{fontWeight: 300}} variant={'h3'} component={'h1'}>
          {t('youtube-channels.title')}
        </Typography>
        <Divider sx={{pt: 6, pb: 6}}>
          <SocialMediaLinks />
        </Divider>

        <Typography variant={'body1'} component={'p'}>
          {t('youtube-channels.introduction')}
        </Typography>
        <Typography variant={'body1'} component={'p'}>
          {t('youtube-channels.about-source')}
        </Typography>
        <SourceLink link={SourceArticleList.YouTubeChannels}/>

        <TopTenChannels
          data={youtubeCahnnelsData}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>
    </Container>
  );
};

export default YouTubeBiggestChannels;
