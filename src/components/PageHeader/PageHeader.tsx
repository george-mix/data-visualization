import React from 'react';
import {Divider} from '@mui/material';
import {Headline} from '@components/UI/Headline';
import {SocialMediaLinks} from './SocialMediaLinks';

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
