import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from '@mui/material';
import {InfoType, SwitchQuantitySource} from './languagePercentageTypes';

type ChartControlsProps = {
  infoType: InfoType;
  switchQuantitySource: SwitchQuantitySource;
}

export const ChartControls: React.FC<ChartControlsProps> = ({infoType, switchQuantitySource}) => (
  <RadioGroup row value={infoType} onChange={switchQuantitySource}>
    <FormControlLabel
      value="channels"
      control={<Radio />}
      label="Number of channels"
    />
    <FormControlLabel
      value="subscribers"
      control={<Radio />}
      label="Percentage of subscribers"
    />
  </RadioGroup>
);
