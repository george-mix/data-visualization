import React from 'react';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';

export const FigureCaption: React.FC<TextComponentProps> = ({text, sx}) => (
  <TranslatedTypography
    translation={text}
    variant="subtitle1"
    component="figcaption"
    sx={{
      color: 'text.secondary',
      textAlign: 'center',
      lineBreak: 'normal',
      p: 1,
      pt: 2,
      pb: 0,
      ...sx,
    }}
  />
);
