import React from 'react';
import {Arc, PieArcDatum, ScaleOrdinal} from 'd3';

type PieArcProps<T> = {
  data: PieArcDatum<T>,
  index: number,
  createArc: Arc<any, PieArcDatum<T>>,
  colors: ScaleOrdinal<string, string, never>,
  text: string
}

export const PieArc = <T, >({data, index, createArc, colors, text}: PieArcProps<T>) => (
  <g key={index}>
    <path d={createArc(data) || undefined} fill={colors(index.toString())} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="black"
      fontSize="16"
    >
      {text}
    </text>
  </g>
);
