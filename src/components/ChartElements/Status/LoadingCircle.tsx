import React from 'react';
import {SvgCircle} from '../General/SvgCircle';

type LoadingCircleProps = {
  xOffset: number;
  values: string;
  begin: string;
}

export const LoadingCircle: React.FC<LoadingCircleProps> = ({xOffset, values, begin}) => (
  <SvgCircle circleFill={{color: 'secondary'}} cx={xOffset}>
    <animateTransform
      attributeName="transform"
      dur="1s"
      type="translate"
      values={values}
      repeatCount="indefinite"
      begin={begin}
    />
  </SvgCircle>
);
