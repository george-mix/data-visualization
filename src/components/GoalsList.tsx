import React from 'react';
import {List, ListItem, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {projectGoals} from '@helpers/common/data';

export const GoalsList: React.FC = () => {
  const {t} = useTranslation();

  return (
    <>
      <Typography variant={'h6'} component={'h2'}>
        {t('about.goals.header')}:
      </Typography>
      <List>
        {projectGoals.map((goal) => (
          <ListItem key={goal.header}>
            <Typography variant={'body1'} component={'p'}>
              {t(goal.header)}
            </Typography>
            <Typography variant={'body1'} component={'p'}>
              {t(goal.description)}
            </Typography>
          </ListItem>))}
      </List>
    </>
  );
};
