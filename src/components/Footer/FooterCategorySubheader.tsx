import React from 'react';
import {TranslatedTypography} from '@components/UI/TranslatedTypography';

type FooterCategorySubheaderProps = {
  text: string;
}

export const FooterCategorySubheader: React.FC<FooterCategorySubheaderProps> = ({text}) => (
  <TranslatedTypography
    translation={text}
    component="h2"
    variant="h6"
    sx={{
      color: 'primary.main',
    }}
  />
);
