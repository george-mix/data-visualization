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
    <SocialMediaLinks />
    <Divider sx={{mb: 2}} />
  </>
);
