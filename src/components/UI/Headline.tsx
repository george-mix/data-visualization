import React from 'react';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';

export const Headline: React.FC<TextComponentProps> = ({text, sx}) => (
  <TranslatedTypography
    translation={text}
    variant="h3"
    component="h1"
    sx={{
      fontWeight: 300,
      textAlign: 'center',
      ...sx,
    }}
  />
);
