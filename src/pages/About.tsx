import React from 'react';
import {Box, Container, Divider, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {SocialMediaLinks} from '@components/SocialMediaLinks';
import {GoalsList} from '@components/GoalsList';
import {TechnologyList} from '@components/TechnologyList';

const About: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Box sx={{pt: 12, pb: 12}}>
        <Typography style={{fontWeight: 300}} variant={'h3'} component={'h1'}>
          {t('about.title')}
        </Typography>
        <Divider sx={{pt: 6, pb: 6}}>
          <SocialMediaLinks />
        </Divider>
        <GoalsList />
        <TechnologyList />
      </Box>
    </Container>
  );
};

export default About;
