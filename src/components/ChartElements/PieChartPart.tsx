import React, {PropsWithChildren} from 'react';
import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';
import {ArcAnnotation, ArcAnnotationProps} from './ArcAnnotation';
import {ArcPolyline, ArcPolylineProps} from './ArcPolyline';
import {PieArc, PieArcProps} from './PieArc';

type PieChartPartProps<T> = {
  arc: PieArcDatum<T>;
  createArc: Arc<any, PieArcDatum<T>>;
  createAnnotationArc?: Arc<any, PieArcDatum<T>>;
  colors: ScaleOrdinal<string, string, never>;
  index: number;
  isShowArc?: boolean;
  arcOptions?: Partial<PieArcProps<T>>;
  annotation?: string;
  isShowAnnotation?: boolean;
  annotationOptions?: Partial<ArcAnnotationProps<T>>;
  isShowPolyline?: boolean;
  polylineOptions?: Partial<ArcPolylineProps<T>>;
}

export const PieChartPart = <T, >({
  arc,
  createArc,
  createAnnotationArc,
  colors,
  index,
  arcOptions,
  isShowPolyline = true,
  polylineOptions,
  isShowAnnotation = true,
  annotation,
  annotationOptions,
  children,
}: PropsWithChildren<PieChartPartProps<T>>) => (
  <g>
    <PieArc
      arc={arc}
      createArc={createArc}
      colors={colors}
      index={index}
      {...arcOptions}
    />
    {
      isShowPolyline && <ArcPolyline
        arc={arc}
        createArc={createArc}
        createAnnotationArc={createAnnotationArc || createArc}
        {...polylineOptions}
      />
    }
    {
      isShowAnnotation && <ArcAnnotation
        arc={arc}
        createAnnotationArc={createAnnotationArc || createArc}
        {...annotationOptions}
      >
        {annotation}
      </ArcAnnotation>
    }
    {children}
  </g>
);
