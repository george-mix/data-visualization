import React from 'react';
import {Subheader} from '@components/UI/Subheader';
import {Figure} from '@components/UI/Figure';
import {Paragraph} from '@components/UI/Paragraph';
import {ActorBoxOfficeChart} from './ActorBoxOfficeChart/ActorBoxOfficeChart';

export const ActorBoxOffice: React.FC = () => (
  <>
    <Subheader text="james-bond-films.actor-box-office.subheader" />

    <Figure caption="james-bond-films.actor-box-office.caption">
      <ActorBoxOfficeChart />
    </Figure>

    <Paragraph text="james-bond-films.actor-box-office.first-paragraph" />
    <Paragraph text="james-bond-films.actor-box-office.second-paragraph" />
  </>
);
