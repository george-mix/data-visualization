import React, {PropsWithChildren} from 'react';
import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';
import {ArcAnnotation, ArcAnnotationProps} from './Arc/ArcAnnotation';
import {ArcPolyline, ArcPolylineProps} from './Arc/ArcPolyline';
import {PieArc, PieArcProps} from './Arc/PieArc';

type PieChartPartProps<T> = {
  arc: PieArcDatum<T>;
  createArc: Arc<any, PieArcDatum<T>>;
  createAnnotationArc?: Arc<any, PieArcDatum<T>>;
  colors: ScaleOrdinal<string, string, never>;
  index: number;
  arcOptions?: Partial<PieArcProps<T>>;
  annotation?: string;
  showAnnotation?: boolean;
  annotationOptions?: Partial<ArcAnnotationProps<T>>;
  showPolyline?: boolean;
  polylineOptions?: Partial<ArcPolylineProps<T>>;
}

export const PieChartPart = <T, >({
  arc,
  createArc,
  createAnnotationArc,
  colors,
  index,
  arcOptions,
  showPolyline = true,
  polylineOptions,
  showAnnotation = true,
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
      showPolyline && <ArcPolyline
        arc={arc}
        createArc={createArc}
        createAnnotationArc={createAnnotationArc || createArc}
        {...polylineOptions}
      />
    }
    {
      showAnnotation && <ArcAnnotation
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
