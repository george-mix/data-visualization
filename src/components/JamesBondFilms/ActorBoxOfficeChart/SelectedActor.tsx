import React from 'react';
import {SvgText} from '@components/ChartElements/General/SvgText';
import {ArcPolyline} from '@components/ChartElements/Arc/ArcPolyline';
import {useSelectedIndex} from './ActorChartContextProvider';
import {ActorArcsProps, BoxOfficeSortingKey} from './actorTypes';

type SelectedActorProps = ActorArcsProps & {
  createLabelArc: ActorArcsProps['createArc'];
  sortingKey: BoxOfficeSortingKey;
}

export const SelectedActor: React.FC<SelectedActorProps> = ({
  actorArcs,
  createArc,
  createLabelArc,
  colors,
  sortingKey,
}) => {
  const actorIndex = useSelectedIndex();
  const actor = actorArcs[actorIndex];
  const {name, thumbnail, filmQuantity} = actor.data;

  return (
    <g>
      <circle r={125} fill="transparent" stroke={colors(actorIndex.toString())} strokeWidth={4} />
      <image
        transform="translate(-37.5, -100)"
        href={thumbnail}
        height="100"
      />
      <SvgText transform="translate(0, 30)" textAnchor="middle">{name}</SvgText>
      <SvgText
        transform="translate(0, 60)"
        textAnchor="middle"
      >
        Box Office: ${actor.data[sortingKey].toFixed(1)} mln
      </SvgText>
      <SvgText
        transform="translate(0, 90)"
        textAnchor="middle">
        Films: {filmQuantity}
      </SvgText>
      <ArcPolyline
        arc={actorArcs[actorIndex]}
        createArc={createArc}
        createAnnotationArc={createLabelArc}
        stroke={colors(actorIndex.toString())}
        strokeWidth={4}
      />
    </g>
  );
};
