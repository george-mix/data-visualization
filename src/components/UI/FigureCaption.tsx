import React from 'react';
import {TranslatedTypography} from './TranslatedTypography';

type FigureCaptionProps = {
  caption: string;
}

export const FigureCaption: React.FC<FigureCaptionProps> = ({caption}) => (
  <TranslatedTypography
    translation={caption}
    variant="subtitle1"
    component="figcaption"
    sx={{
      color: 'info.dark',
      textAlign: 'center',
      lineBreak: 'anywhere',
      pt: 2,
    }}
  />
);
