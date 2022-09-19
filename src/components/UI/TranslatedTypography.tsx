import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
import {useTranslation} from 'react-i18next';

interface TranslatedTypographyProps extends TypographyProps<any>{
  translation: string;
}

export const TranslatedTypography: React.FC<TranslatedTypographyProps> = ({
  translation,
  ...typographyProps
}) => {
  const {t} = useTranslation();

  return (
    <Typography {...typographyProps}>
      {t(translation)}
    </Typography>
  );
};
