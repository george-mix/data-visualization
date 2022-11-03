import React from 'react';
import {useJamesBondData} from '@helpers/queries/useJamesBondData';
import {SvgStatusProvider} from '@helpers/providers/SvgStatusProvider';
import {FinancialTimelineSvg} from './FinancialTimelineSvg';
import {ToggleButtons} from '@components/UI/ToggleButtons';
import {useTimelineValues} from './useTimelineValues';
import {MoneyType, TimelineType} from './timelineTypes';

export const FinancialTimelineChart: React.FC = () => {
  const [films, isLoading, isError] = useJamesBondData();
  const {timelineType, setTimelineType, moneyType, setMoneyType, yValue} = useTimelineValues();

  return (
    <>
      <ToggleButtons
        selectedValue={timelineType}
        setSelectedValue={setTimelineType}
        values={Object.values(TimelineType)}
      />
      <SvgStatusProvider isLoading={isLoading} isError={isError}>
        <FinancialTimelineSvg films={films} yValue={yValue} />
      </SvgStatusProvider>
      <ToggleButtons
        selectedValue={moneyType}
        setSelectedValue={setMoneyType}
        values={Object.values(MoneyType)}
      />
    </>
  );
};
