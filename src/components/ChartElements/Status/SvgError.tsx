import React from 'react';
import {SvgCircle} from '@components/ChartElements/General/SvgCircle';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {SvgPath} from '../General/SvgPath';

type SvgErrorProps = {
  width: number;
  height: number;
}

const translateWidth = 280;
const translateHeight = 150;
const circleRadius = 41.5;

export const SvgError: React.FC<SvgErrorProps> = ({width, height}) => (
  <ResponsiveSvg
    width={width}
    height={height}
    translateWidth={translateWidth}
    translateHeight={translateHeight}
  >
    <SvgCircle
      circleStroke={{color: 'error', alpha: 0.3}}
      circleFill={false}
      strokeWidth="4"
      cx={circleRadius}
      cy={circleRadius}
      r={circleRadius}
    />
    <SvgPath
      d="M22.244224,22 L60.4279902,60.1837662"
      pathStroke={{color: 'error'}}
      strokeWidth="3"
      strokeLinecap="square"
    />
    <SvgPath
      d="M60.755776,21 L23.244224,59.8443492"
      pathStroke={{color: 'error'}}
      strokeWidth="3"
      strokeLinecap="square"
    />
  </ResponsiveSvg>
);
