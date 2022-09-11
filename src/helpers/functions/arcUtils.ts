import {Arc, PieArcDatum} from 'd3';

type GetPolylinePointsForLabel = <T, >(
  _createArc: Arc<any, PieArcDatum<T>>,
  _createLabelArc: Arc<any, PieArcDatum<T>>,
  _datum: PieArcDatum<T>
) => string

export const getStraightPolylinePointsForLabel: GetPolylinePointsForLabel = (
  createArc,
  createLabelArc,
  datum,
) => {
  const posA = createArc.centroid(datum);
  const posB = createLabelArc.centroid(datum);
  const result = [posA, posB].join();
  return result;
};

export const getAnchorForCircleAngle = (startAngle: number, endAngle: number) => {
  const midangle = startAngle + ((endAngle - startAngle) / 2);
  return (midangle < Math.PI ? 'start' : 'end');
};

type GetPositionForAnnotationText = <T, >(
  _createLabelArc: Arc<any, PieArcDatum<T>>,
  _datum: PieArcDatum<T>
) => string;

export const getPositionForAnnotationText: GetPositionForAnnotationText = (
  createLabelArc,
  datum,
) => {
  const position = createLabelArc.centroid(datum);
  return `translate(${position})`;
};
