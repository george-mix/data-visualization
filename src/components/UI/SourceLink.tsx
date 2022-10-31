import React from 'react';
import {Box, Link, SxProps} from '@mui/material';
import {useTranslation} from 'react-i18next';

type SourceLinkProps = {
  link: string;
  sx?: SxProps;
}

export const SourceLink: React.FC<SourceLinkProps> = ({link, sx}) => {
  const {t} = useTranslation();

  return (
    <Box
      component="p"
      sx={{
        m: 0,
        pb: 1,
        ...sx,
      }}
    >
      <Link
        href={link}
        sx={{
          color: 'secondary.main',
          textDecorationColor: (theme) => theme.palette.secondary.light,
        }}
      >
        {t('common.source')}
      </Link>
    </Box>
  );
};
