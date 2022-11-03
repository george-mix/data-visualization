import {useState} from 'react';
import {JamesBondFilmData} from '@helpers/common/interfaces';
import {CombinedPopularityType, MoneyType, TimelineType} from './timelineTypes';

const mapTest = (timeline: CombinedPopularityType) => {
  const yValue = (film: JamesBondFilmData): number => {
    switch (timeline) {
      case `${TimelineType.BoxOffice} ${MoneyType.Actual}`:
        return film.boxOfficeActual;
      case `${TimelineType.BoxOffice} ${MoneyType.Adjusted}`:
        return film.boxOfficeAdjusted;
      case `${TimelineType.Budget} ${MoneyType.Actual}`:
        return film.budgetActual;
      case `${TimelineType.Budget} ${MoneyType.Adjusted}`:
        return film.budgetAdjusted;
      case `${TimelineType.Profit} ${MoneyType.Actual}`:
        return film.boxOfficeActual - film.budgetActual;
      case `${TimelineType.Profit} ${MoneyType.Adjusted}`:
        return film.boxOfficeAdjusted - film.budgetAdjusted;
      default:
        return film.boxOfficeActual;
    }
  };

  return yValue;
};

export const useTimelineValues = () => {
  const [timelineType, setTimelineType] = useState<TimelineType>(TimelineType.BoxOffice);
  const [moneyType, setMoneyType] = useState<MoneyType>(MoneyType.Actual);

  const yValue = mapTest(`${timelineType} ${moneyType}`);

  return {timelineType, setTimelineType, moneyType, setMoneyType, yValue};
};
