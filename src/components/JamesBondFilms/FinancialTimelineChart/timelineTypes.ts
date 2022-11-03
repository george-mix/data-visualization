export enum TimelineType {
  'BoxOffice' = 'Box Office',
  'Budget' = 'Budget',
  'Profit' = 'Profit',
};

export enum MoneyType {
  'Actual' = 'Actual $',
  'Adjusted' = 'Adjusted $2005',
};

export type CombinedPopularityType = `${TimelineType} ${MoneyType}`;