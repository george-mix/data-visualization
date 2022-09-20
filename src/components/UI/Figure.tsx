import React from 'react';
import {Box, SxProps} from '@mui/material';
import {FigureCaption} from './FigureCaption';

type FigureProps = {
  caption?: string;
  sx?: SxProps;
}

export const Figure: React.FC<FigureProps> = ({children, caption, sx}) => (
  <Box
    component="figure"
    sx={{
      m: 0,
      overflow: 'hidden',
      pb: 2,
      ...sx,
    }}
  >
    {children}
    {caption && <FigureCaption text={caption} />}
  </Box>
);
