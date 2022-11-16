import React from 'react';
import {
  Box,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {SocialMediaList} from './SocialMediaList';
import {PageList} from './PageList';
import {CopyrightMessage} from './CopyrightMessage';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container
        component="footer"
        sx={{
          pb: 2,
        }}
      >
        <Divider sx={{mb: 4}} />
        <Box
          sx={{
            pl: 2,
            pr: 2,
          }}
        >
          {
            isDownSmall && <>
              <SocialMediaList />
              <PageList />
              <CopyrightMessage />
            </>
          }
          {
            !isDownSmall && <>
              <Box
                sx={{
                  display: 'flex',
                  gap: 6,
                }}
              >
                <SocialMediaList />
                <PageList />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <CopyrightMessage />
              </Box>
            </>
          }
        </Box>
      </Container>
    </>
  );
};
