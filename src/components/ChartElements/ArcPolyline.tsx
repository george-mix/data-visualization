import React from 'react';
import {Arc, PieArcDatum} from 'd3';
import {getStraightPolylinePointsForLabel} from '@helpers/functions/arcUtils';
import {useTheme} from '@mui/system';

export type ArcPolylineProps<T> = {
  arc: PieArcDatum<T>;
  createArc: Arc<any, PieArcDatum<T>>;
  createAnnotationArc: Arc<any, PieArcDatum<T>>;
  polylineProps?: React.SVGProps<SVGPolylineElement>;
}

export const ArcPolyline = <T, >({
  arc,
  createArc,
  createAnnotationArc = createArc,
  polylineProps,
}: ArcPolylineProps<T>) => {
  const theme = useTheme();

  return (
    <polyline
      stroke={polylineProps?.stroke || theme.palette.text.primary}
      strokeWidth={polylineProps?.strokeWidth || 1}
      points={
        polylineProps?.points || getStraightPolylinePointsForLabel(
          createArc,
          createAnnotationArc,
          arc,
        )
      }
      {...polylineProps}
    />
  );
};
