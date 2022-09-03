import React from 'react';
import {List, ListItem, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {technologyStackList} from '@helpers/common/data';

export const TechnologyList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      <Typography variant={'h6'} component={'h2'}>
        {t('about.technologies')}:
      </Typography>
      <List>
        {technologyStackList.map((technology) => (
          <ListItem key={technology}>
            <Typography variant={'body1'} component={'p'}>
              {technology}
            </Typography>
          </ListItem>))}
      </List>
    </>
  );
};
