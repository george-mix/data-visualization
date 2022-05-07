import React, {useState} from 'react';
import {
  PieArcDatum,
  arc,
  ascending,
  flatRollup,
  pie,
  scaleOrdinal,
  schemeSet3,
  sum,
} from 'd3';
import {JamesBondFilmData, KeysOfType} from '@utils/commonTypes';
import {PieArc} from '@components/ChartElements/PieArc';

interface KeyPersonTotalBoxOffice {
  person: string,
  boxOffice: number,
}

const width = 450;
const height = 450;
const margin = {top: 100, right: 100, bottom: 20, left: 20};
const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;

export const BoxOfficeDonutChart: React.FC<{
  data: JamesBondFilmData[],
}> = ({data}) => {
  const [
    personType,
    setPersonType,
  ] = useState<KeysOfType<JamesBondFilmData, string>>('bondActor');
  const [
    boxOfficeType,
    setBoxOfficeType,
  ] = useState<KeysOfType<JamesBondFilmData, number>>('boxOfficeActual');
  const colors = scaleOrdinal(schemeSet3);

  const findTotalBoxOffice = (
    personType: KeysOfType<JamesBondFilmData, string>,
    boxOffice: KeysOfType<JamesBondFilmData, number>,
  ) : KeyPersonTotalBoxOffice[] => {
    const keyPersonList = flatRollup(
      data,
      (value) => sum(value, (d) => d[boxOffice]),
      (d) => d[personType],
    )
      .map((person) => ({
        person: person[0],
        boxOffice: person[1],
      }));
    return keyPersonList;
  };

  const keyPersonList: KeyPersonTotalBoxOffice[] = findTotalBoxOffice(personType, boxOfficeType);

  const createPie = pie<KeyPersonTotalBoxOffice>()
    .value((d) => d.boxOffice)
    .sort((a, b) => ascending(a.boxOffice, b.boxOffice));

  const createArc = arc<PieArcDatum<KeyPersonTotalBoxOffice>>()
    .innerRadius(radius * 0.5)
    .outerRadius(radius * 0.8);

  const createLabelArc = arc<PieArcDatum<KeyPersonTotalBoxOffice>>()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  const languagePieArcs = createPie(keyPersonList);
  console.log(languagePieArcs);

  const handlePersonSwitch = () => {
    if (personType === 'bondActor') {
      setPersonType('director');
    } else {
      setPersonType('bondActor');
    }
  };

  const handleBoxOfficeSwitch = () => {
    if (boxOfficeType === 'boxOfficeActual') {
      setBoxOfficeType('boxOfficeAdjusted');
    } else {
      setBoxOfficeType('boxOfficeActual');
    }
  };

  const drawPolylineForLabel = (d: PieArcDatum<KeyPersonTotalBoxOffice>) => {
    const posA = createArc.centroid(d);
    const posB = createLabelArc.centroid(d);
    // const posC = createLabelArc.centroid(d);
    // const midangle = d.startAngle + ((d.endAngle - d.startAngle) / 2);
    // posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
    const result = [posA, posB].join();
    return result;
  };

  const transformAnnotationText = (d: PieArcDatum<KeyPersonTotalBoxOffice>) => {
    const pos = createLabelArc.centroid(d);
    // const midangle = d.startAngle + ((d.endAngle - d.startAngle) / 2);
    // pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
    return 'translate(' + pos + ')';
  };

  const getAnchorForCircle = (startAngle: number, endAngle: number) => {
    const midangle = startAngle + ((endAngle - startAngle) / 2);
    return (midangle < Math.PI ? 'start' : 'end');
  };

  return (
    <>
      <button onClick={handlePersonSwitch}>Switch Person</button>
      <button onClick={handleBoxOfficeSwitch}>Switch Box Office</button>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <g transform={`translate(${radius},${radius})`}>
          {languagePieArcs.map((arc, index) => (
            <React.Fragment key={arc.data.person}>
              <PieArc<KeyPersonTotalBoxOffice>
                data={arc}
                index={index}
                createArc={createArc}
                colors={colors}
              />
              <polyline
                stroke="black"
                fill="none"
                strokeWidth={1}
                points={drawPolylineForLabel(arc)}
              />
              <text
                transform={transformAnnotationText(arc)}
                textAnchor={getAnchorForCircle(arc.startAngle, arc.endAngle)}
              >
                {`${arc.data.person} $${arc.value.toFixed(0)}`}
              </text>
            </React.Fragment>
          ))}
        </g>
      </svg>
    </>
  );
};
