import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from '@mui/material';
import {useActorApi, useBoxOfficeContext} from './ActorChartContextProvider';

export const ActorChartControls: React.FC = () => {
  const boxOfficeType = useBoxOfficeContext();
  const {switchBoxOfficeType} = useActorApi();

  return (
    <RadioGroup row value={boxOfficeType} onChange={switchBoxOfficeType}>
      <FormControlLabel
        value="total"
        control={<Radio />}
        label="Total box office"
      />
      <FormControlLabel
        value="average"
        control={<Radio />}
        label="Average per film"
      />
    </RadioGroup>
  );
};
