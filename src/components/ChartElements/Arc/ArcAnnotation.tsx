import React from 'react';
import {Arc, PieArcDatum} from 'd3';
import {getAnchorForCircleAngle, getPositionForAnnotationText} from '@helpers/functions/arcUtils';
import {SvgTextProps} from '@helpers/common/types';
import {SvgText} from '../General/SvgText';

export type ArcAnnotationProps<T> = SvgTextProps & {
  arc: PieArcDatum<T>;
  createAnnotationArc: Arc<any, PieArcDatum<T>>;
}

export const ArcAnnotation = <T, >({
  arc,
  createAnnotationArc,
  children,
  ...textProps
}: ArcAnnotationProps<T>) => (
  <SvgText
    transform={getPositionForAnnotationText(createAnnotationArc, arc)}
    textAnchor={getAnchorForCircleAngle(arc.startAngle, arc.endAngle)}
    {...textProps}
  >
    {children}
  </SvgText>
);
