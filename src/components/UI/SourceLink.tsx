import React from 'react';
import {Link} from '@mui/material';
import {useTranslation} from 'react-i18next';

type SourceLinkProps = {
  link: string;
}

export const SourceLink: React.FC<SourceLinkProps> = ({link}) => {
  const {t} = useTranslation();

  return (
    <Link href={link}>{t('common.source')}</Link>
  );
};
