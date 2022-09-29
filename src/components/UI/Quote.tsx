import React from 'react';
import {Box, SxProps} from '@mui/material';
import {TextComponentProps} from '@helpers/common/types';
import {TranslatedTypography} from './TranslatedTypography';
import {Figure} from './Figure';

type QuoteProps = TextComponentProps & {
  author: string;
  authorSx?: SxProps;
};

export const Quote: React.FC<QuoteProps> = ({text, author, sx, authorSx}) => (
  <Figure sx={{pb: 0}}>
    <Box
      component="blockquote"
      sx={{
        maxWidth: 400,
      }}
    >
      <TranslatedTypography
        translation={text}
        variant="body1"
        component="p"
        sx={{
          fontWeight: 300,
          ...sx,
        }}
      />
      <Box
        component="figcaption"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <TranslatedTypography
          translation={author}
          variant="subtitle1"
          component="span"
          sx={{
            fontWeight: 300,
            ...authorSx,
          }}
        />
      </Box>
    </Box>
  </Figure>
);
