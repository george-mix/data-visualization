export enum TimelineType {
  'BoxOffice' = 'james-bond-films.common.box-office',
  'Budget' = 'james-bond-films.common.budget',
  'Profit' = 'james-bond-films.common.profit',
};

export enum MoneyType {
  'Actual' = 'james-bond-films.common.actual-money',
  'Adjusted' = 'james-bond-films.common.adjusted-money',
};

export type CombinedPopularityType = `${TimelineType} ${MoneyType}`;