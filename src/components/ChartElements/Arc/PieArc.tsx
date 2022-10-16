import React from 'react';
import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';
import {SvgPathProps} from '@helpers/common/types';
import {SvgPath} from '../General/SvgPath';

export type PieArcProps<T> = SvgPathProps & {
  arc: PieArcDatum<T>;
  index: number;
  createArc: Arc<any, PieArcDatum<T>>;
  colors: ScaleOrdinal<string, string, never>;
}

export const PieArc = <T, >({
  arc,
  index,
  createArc,
  colors,
  ...pathProps
}: PieArcProps<T>) => (
  <SvgPath
    d={pathProps?.d || createArc(arc) || undefined}
    fill={pathProps?.fill || colors(index.toString())}
    {...pathProps}
  />
);
