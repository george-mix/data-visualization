export const calculatePercentage = (number: number, total: number) => (number / total) * 100;

export const getPercentageString = (number: number, total: number, digits: number = 2) => {
  const percentage = calculatePercentage(number, total);
  return `${percentage.toFixed(digits)}%`;
};
