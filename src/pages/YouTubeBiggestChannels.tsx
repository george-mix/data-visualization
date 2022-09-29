import React from 'react';
import {SourceLink} from '@components/UI/SourceLink';
import {TopTenChannels} from '@components/YouTubeBiggestChannels/TopTenChannels';
import {useYouTubeData} from '@helpers/hooks/useYouTubeData';
import {SourceArticleList} from '@helpers/common/enums';
import {Languages} from '@components/YouTubeBiggestChannels/Languages';
import {PageHeader} from '@components/PageHeader';
import {Paragraph} from '@components/UI/Paragraph';
import {Countries} from '@components/YouTubeBiggestChannels/Countries';

const YouTubeBiggestChannels: React.FC = () => {
  const [youtubeCahnnelsData, isLoading, isError] = useYouTubeData();

  return (
    <>
      <PageHeader headline="youtube-channels.title" />

      <Paragraph text="youtube-channels.introduction" />
      <Paragraph text="youtube-channels.about-source" />
      <SourceLink link={SourceArticleList.YouTubeChannels} sx={{pb: 1}} />

      <TopTenChannels
        data={youtubeCahnnelsData}
        isLoading={isLoading}
        isError={isError}
      />

      <Languages
        data={youtubeCahnnelsData}
        isLoading={isLoading}
        isError={isError}
      />

      <Countries
        data={youtubeCahnnelsData}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default YouTubeBiggestChannels;
