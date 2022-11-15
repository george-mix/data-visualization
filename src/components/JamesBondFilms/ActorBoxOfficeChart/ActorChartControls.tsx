import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useActorApi, useBoxOfficeContext} from './ActorChartContextProvider';

export const ActorChartControls: React.FC = () => {
  const {t} = useTranslation();
  const boxOfficeType = useBoxOfficeContext();
  const {switchBoxOfficeType} = useActorApi();

  return (
    <RadioGroup row value={boxOfficeType} onChange={switchBoxOfficeType}>
      <FormControlLabel
        value="total"
        control={<Radio />}
        label={t('james-bond-films.actor-box-office.controller-total')}
      />
      <FormControlLabel
        value="average"
        control={<Radio />}
        label={t('james-bond-films.actor-box-office.controller-average')}
      />
    </RadioGroup>
  );
};
