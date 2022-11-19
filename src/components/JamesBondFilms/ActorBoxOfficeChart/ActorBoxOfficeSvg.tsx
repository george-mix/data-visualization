import React from 'react';
import {
  PieArcDatum,
  arc,
  ascending,
  pie,
  scaleOrdinal,
} from 'd3';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {useColorScheme} from '@helpers/hooks/useColorScheme';
import {useBoxOfficeContext} from './ActorChartContextProvider';
import {SelectedActor} from './SelectedActor';
import {ActorChartProps, ActorInfo} from './actorTypes';
import {useActorInfo} from './useActorInfo';
import {ActorArcs} from './ActorArcs';

const width = 600;
const height = 500;
const coefficient = width / height;
const radius = Math.min(width, height) / 2;
const translateWidth = radius * coefficient;
const translateHeight = radius;
const donutInnerRadius = radius * 0.9;
const donutOutterRadius = radius * 0.8;
const labelRadius = radius * 0.5;

export const ActorBoxOfficeSvg: React.FC<ActorChartProps> = ({films, thumbnails}) => {
  const boxOfficeType = useBoxOfficeContext();
  const {actors, sortingKey} = useActorInfo({films, thumbnails, boxOfficeType});

  const colorScheme = useColorScheme<string[]>('schemeOne');
  const colors = scaleOrdinal(colorScheme);

  const createPie = pie<ActorInfo>()
    .value((actor) => actor[sortingKey])
    .sort((a, b) => ascending(a[sortingKey], b[sortingKey]));

  const actorsBoxOfficeArcs = createPie(actors);

  const createArc = arc<PieArcDatum<ActorInfo>>()
    .innerRadius(donutInnerRadius)
    .outerRadius(donutOutterRadius);

  const createLabelArc = arc<PieArcDatum<ActorInfo>>()
    .innerRadius(labelRadius)
    .outerRadius(labelRadius);

  return (
    <ResponsiveSvg
      width={width}
      translateWidth={translateWidth}
      height={height}
      translateHeight={translateHeight}
    >
      <ActorArcs
        actorArcs={actorsBoxOfficeArcs}
        createArc={createArc}
        colors={colors}
      />
      <SelectedActor
        actorArcs={actorsBoxOfficeArcs}
        createArc={createArc}
        createLabelArc={createLabelArc}
        colors={colors}
        sortingKey={sortingKey}
      />
    </ResponsiveSvg>
  );
};
