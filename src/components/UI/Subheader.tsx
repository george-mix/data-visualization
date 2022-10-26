import React from 'react';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';

export const Subheader: React.FC<TextComponentProps> = ({text, sx}) => (
  <TranslatedTypography
    translation={text}
    variant="h4"
    component="h2"
    sx={{
      pb: 2,
      ...sx,
    }}
  />
);
