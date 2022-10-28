import React from 'react';
import {ResponsiveSvg} from '../ResponsiveSvg';
import {LoadingCircle} from './LoadingCircle';

type SvgLoaderProps = {
  width: number;
  height: number;
}

const translateWidth = 260;
const loadingCircles = [
  {
    xOffset: 12,
    values: '0 15; 0 -15; 0 15',
    begin: '0.1',
  },
  {
    xOffset: 60,
    values: '0 10; 0 -10; 0 10',
    begin: '0.2',
  },
  {
    xOffset: 108,
    values: '0 5; 0 -5; 0 5',
    begin: '0.3',
  },
];

export const SvgLoader: React.FC<SvgLoaderProps> = ({width, height}) => (
  <ResponsiveSvg
    width={width}
    height={height}
    translateWidth={translateWidth}
    translateHeight={height / 2}
  >
    {loadingCircles.map((circle) => (
      <LoadingCircle
        key={circle.xOffset}
        xOffset={circle.xOffset}
        values={circle.values}
        begin={circle.begin}
      />
    ))}
  </ResponsiveSvg>
);
