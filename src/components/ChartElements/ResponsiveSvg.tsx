import React from 'react';

type ResponsiveSvgProps = {
  width: number;
  height: number;
  translateWidth?: number;
  translateHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const ResponsiveSvg: React.FC<ResponsiveSvgProps> = ({
  width,
  height,
  translateWidth = 0,
  translateHeight = 0,
  children,
  maxWidth = width,
  maxHeight = height,
}) => (
  <svg
    style={{
      maxWidth,
      maxHeight,
    }}
    viewBox={`0 0 ${width} ${height}`}
  >
    <g transform={`translate(${translateWidth},${translateHeight})`}>
      {children}
    </g>
  </svg>
);
