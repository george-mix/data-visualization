import React, {PropsWithChildren} from 'react';
import {Arc, PieArcDatum} from 'd3';
import {getAnchorForCircleAngle, getPositionForAnnotationText} from '@helpers/functions/arcUtils';
import {useTheme} from '@mui/system';

export type ArcAnnotationProps<T> = {
  arc: PieArcDatum<T>;
  createAnnotationArc: Arc<any, PieArcDatum<T>>;
  textProps?: React.SVGProps<SVGTextElement>;
}

export const ArcAnnotation = <T, >({
  arc,
  createAnnotationArc,
  textProps,
  children,
}: PropsWithChildren<ArcAnnotationProps<T>>) => {
  const theme = useTheme();

  return (
    <text
      fill={textProps?.fill || theme.palette.text.primary}
      transform={
        textProps?.transform || getPositionForAnnotationText(
          createAnnotationArc,
          arc,
        )
      }
      textAnchor={
        textProps?.textAnchor || getAnchorForCircleAngle(
          arc.startAngle,
          arc.endAngle,
        )
      }
      {...textProps}
    >
      {children}
    </text>
  );
};
