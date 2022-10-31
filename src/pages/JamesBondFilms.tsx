import React from 'react';
import {PageHeader} from '@components/PageHeader';
import {SourceArticleList} from '@helpers/common/enums';
import {SourceLink} from '@components/UI/SourceLink';
import {Paragraph} from '@components/UI/Paragraph';

const JamesBondFilms: React.FC = () => (
  <>
    <PageHeader headline="james-bond-films.title" />

    <Paragraph text="james-bond-films.introduction" />
    <Paragraph text="james-bond-films.about-source" />
    <SourceLink link={SourceArticleList.JamesBondFilms} />

  </>
);

export default JamesBondFilms;
