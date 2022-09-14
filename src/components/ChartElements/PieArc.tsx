import React from 'react';
import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';

export type PieArcProps<T> = {
  arc: PieArcDatum<T>;
  index: number;
  createArc: Arc<any, PieArcDatum<T>>;
  colors: ScaleOrdinal<string, string, never>;
  pathProps?: React.SVGProps<SVGPathElement>;
}

export const PieArc = <T, >({
  arc,
  index,
  createArc,
  colors,
  pathProps,
}: PieArcProps<T>) => (
  <path
    d={pathProps?.d || createArc(arc) || undefined}
    fill={pathProps?.fill || colors(index.toString())}
    {...pathProps}
  />
);
