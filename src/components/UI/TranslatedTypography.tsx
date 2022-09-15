import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
import {useTranslation} from 'react-i18next';

interface TranslatedTypographyProps extends TypographyProps<any>{
  translation: string;
}

export const TranslatedTypography: React.FC<TranslatedTypographyProps> = (props) => {
  const {t} = useTranslation();
  const {translation, ...typographyProps} = props;

  return (
    <Typography {...typographyProps}>
      {t(translation)}
    </Typography>
  );
};
