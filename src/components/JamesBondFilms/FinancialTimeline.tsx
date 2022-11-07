import React from 'react';
import {Subheader} from '@components/UI/Subheader';
import {Figure} from '@components/UI/Figure';
import {Paragraph} from '@components/UI/Paragraph';
import {FinancialTimelineChart} from './FinancialTimelineChart/FinancialTimelineChart';

export const FinancialTimeline: React.FC = () => (
  <>
    <Subheader text="james-bond-films.financial-timeline.subheader" />

    <Figure caption="james-bond-films.financial-timeline.caption">
      <FinancialTimelineChart />
    </Figure>

    <Paragraph text="james-bond-films.financial-timeline.first-paragraph" />
    <Paragraph text="james-bond-films.financial-timeline.second-paragraph" />
    <Paragraph text="james-bond-films.financial-timeline.third-paragraph" />
  </>
);

