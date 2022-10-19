import React from 'react';
import {PageHeader} from '@components/PageHeader';
import {GoalList} from '@components/About/GoalList';
import {TechnologyList} from '@components/About/TechnologyList';

const About: React.FC = () => (
  <>
    <PageHeader headline="about.title" />
    <GoalList />
    <TechnologyList />
  </>
);

export default About;
