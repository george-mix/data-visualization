import React from 'react';
import {Box} from '@mui/material';
import {FigureCaption} from './FigureCaption';

type FigureProps = {
  caption?: string;
}

export const Figure: React.FC<FigureProps> = ({children, caption}) => (
  <Box component="figure" sx={{m: 0, overflow: 'hidden'}}>
    {children}
    {caption && <FigureCaption text={caption} />}
  </Box>
);
