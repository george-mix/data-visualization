import React from 'react';
import {Divider} from '@mui/material';
import {SocialMediaLinks} from './SocialMediaLinks';
import {Headline} from './UI/Headline';

type PageHeaderProps = {
  headline: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({headline}) => (
  <>
    <Headline text={headline} />

    <Divider sx={{pt: 6, pb: 6}}>
      <SocialMediaLinks />
    </Divider>
  </>
);
