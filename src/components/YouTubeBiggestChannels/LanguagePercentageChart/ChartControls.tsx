import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from '@mui/material';
import {InfoType, SwitchQuantitySource} from './languagePercentageTypes';
import {useTranslation} from 'react-i18next';

type ChartControlsProps = {
  infoType: InfoType;
  switchQuantitySource: SwitchQuantitySource;
}

export const ChartControls: React.FC<ChartControlsProps> = ({infoType, switchQuantitySource}) => {
  const {t} = useTranslation();

  return (
    <RadioGroup row value={infoType} onChange={switchQuantitySource}>
      <FormControlLabel
        value="channels"
        control={<Radio />}
        label={t('youtube-channels.languages.controller-number')}
      />
      <FormControlLabel
        value="subscribers"
        control={<Radio />}
        label={t('youtube-channels.languages.controller-percentage')}
      />
    </RadioGroup>
  );
};
