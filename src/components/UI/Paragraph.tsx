import React from 'react';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';

export const Paragraph: React.FC<TextComponentProps> = ({text, sx}) => (
  <TranslatedTypography
    translation={text}
    variant="body1"
    component="p"
    sx={{
      pb: 2,
      ...sx,
      maxWidth: 840,
    }}
  />
);
