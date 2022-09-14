import React from 'react';

type ResponsiveSvgProps = {
  width: number,
  height: number,
  translateWidth: number,
  translateHeight: number,
}

export const ResponsiveSvg: React.FC<ResponsiveSvgProps> = ({
  width,
  height,
  translateWidth,
  translateHeight,
  children,
}) => (
  <svg viewBox={`0 0 ${width} ${height}`}>
    <g transform={`translate(${translateWidth},${translateHeight})`}>
      {children}
    </g>
  </svg>
);
