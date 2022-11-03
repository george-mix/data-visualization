import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';

type ToggleButtonsProps<T> = {
  selectedValue: T;
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>;
  values: T[];
}

export const ToggleButtons = <T, >({
  values,
  selectedValue,
  setSelectedValue,
}: ToggleButtonsProps<T>) => {
  const handleValueChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: T | null,
  ) => {
    if (newValue !== null) {
      setSelectedValue(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectedValue}
      size="small"
      exclusive
      onChange={handleValueChange}
      aria-label="Platform"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 1,
      }}
    >
      {values.map((value, index) => (
        <ToggleButton key={index} value={value as {}}>{value}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
