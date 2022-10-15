import React from 'react';
import {Figure} from '@components/UI/Figure';
import {Subheader} from '@components/UI/Subheader';
import {Paragraph} from '@components/UI/Paragraph';
import {ContentCategoriesChart} from './ContentCategoriesChart/ContentCategoriesChart';

export const ContentCategories: React.FC = () => (
  <>
    <Subheader text="youtube-channels.content-categories.subheader" />

    <Figure caption="youtube-channels.content-categories.caption">
      <ContentCategoriesChart />
    </Figure>

    <Paragraph text="youtube-channels.content-categories.first-paragraph" />
    <Paragraph text="youtube-channels.content-categories.second-paragraph" />
  </>
);
