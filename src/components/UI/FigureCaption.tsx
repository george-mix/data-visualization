import React from 'react';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';

export const FigureCaption: React.FC<TextComponentProps> = ({text, sx}) => (
  <TranslatedTypography
    translation={text}
    variant="subtitle1"
    component="figcaption"
    sx={{
      color: 'info.dark',
      textAlign: 'center',
      lineBreak: 'normal',
      pt: 1,
      ...sx,
    }}
  />
);
