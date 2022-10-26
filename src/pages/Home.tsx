import React from 'react';
import {Feed} from '@components/Feed/Feed';
import {Paragraph} from '@components/UI/Paragraph';
import {Quote} from '@components/UI/Quote';
import {PageHeader} from '@components/PageHeader';

const Home: React.FC = () => (
  <>
    <PageHeader headline="home.hero-section.header" />

    <Paragraph text="home.hero-section.welcome-message" sx={{pb: 2}} />
    <Quote text="home.hero-section.quote" author="home.hero-section.quote-author" />
    <Paragraph text="home.hero-section.description" />

    <Feed />
  </>
);

export default Home;
