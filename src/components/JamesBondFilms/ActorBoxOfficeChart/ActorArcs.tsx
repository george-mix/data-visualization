import React from 'react';
import {PieArc} from '@components/ChartElements/Arc/PieArc';
import {useActorApi} from './ActorChartContextProvider';
import {ActorArcsProps} from './actorTypes';

export const ActorArcs: React.FC<ActorArcsProps> = ({actorArcs, createArc, colors}) => {
  const {changeSelectedIndex} = useActorApi();

  return (
    <>
      {actorArcs.map((arc, index) => (
        <PieArc
          key={arc.data.name}
          arc={arc}
          createArc={createArc}
          index={index}
          colors={colors}
          onPointerDown={() => changeSelectedIndex(index)}
        />
      ))
      }
    </>
  );
};
