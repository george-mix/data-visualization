import React from 'react';
import {Arc, PieArcDatum} from 'd3';
import {getStraightPolylinePointsForLabel} from '@helpers/functions/arcUtils';
import {SvgPolylineProps} from '@helpers/common/types';
import {SvgPolyline} from '../General/SvgPolyline';

export type ArcPolylineProps<T> = SvgPolylineProps & {
  arc: PieArcDatum<T>;
  createArc: Arc<any, PieArcDatum<T>>;
  createAnnotationArc: Arc<any, PieArcDatum<T>>;
}

export const ArcPolyline = <T, >({
  arc,
  createArc,
  createAnnotationArc = createArc,
  ...polylineProps
}: ArcPolylineProps<T>) => (
  <SvgPolyline
    points={
      getStraightPolylinePointsForLabel(
        createArc,
        createAnnotationArc,
        arc,
      )
    }
    {...polylineProps}
  />
);
