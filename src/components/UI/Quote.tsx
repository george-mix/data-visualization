import React from 'react';
import {Box} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {TranslatedTypography} from './TranslatedTypography';
import {Figure} from './Figure';

type QuoteProps = {
  text: string;
  author: string;
};

export const Quote: React.FC<QuoteProps> = ({text, author}) => (
  <Figure>
    <Box
      component="blockquote"
      sx={{
        m: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormatQuoteIcon
          sx={{
            fontSize: 36,
            color: 'primary.light',
          }}
        />
        <TranslatedTypography
          translation={text}
          variant="body1"
          component="p"
          sx={{
            fontWeight: 300,
            p: 2,
          }}
        />
      </Box>
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
          }}
        />
      </Box>
    </Box>
  </Figure>
);
