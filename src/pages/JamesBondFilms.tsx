import React from 'react';
import {PageHeader} from '@components/PageHeader/PageHeader';
import {SourceArticleList} from '@helpers/common/enums';
import {SourceLink} from '@components/UI/SourceLink';
import {Paragraph} from '@components/UI/Paragraph';
import {FinancialTimeline} from '@components/JamesBondFilms/FinancialTimeline';
import {ActorBoxOffice} from '@components/JamesBondFilms/ActorBoxOffice';

const JamesBondFilms: React.FC = () => (
  <>
    <PageHeader headline="james-bond-films.title" />

    <Paragraph text="james-bond-films.introduction" />
    <Paragraph text="james-bond-films.about-source" />
    <SourceLink link={SourceArticleList.JamesBondFilms} />

    <FinancialTimeline />
    <ActorBoxOffice />
  </>
);

export default JamesBondFilms;
