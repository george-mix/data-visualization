import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';
import {useTranslation} from 'react-i18next';

type ToggleButtonsProps<T> = {
  selectedValue: T;
  setSelectedValue: React.Dispatch<React.SetStateAction<T>>;
  values: T[];
}

export const ToggleButtons = <T extends string, >({
  values,
  selectedValue,
  setSelectedValue,
}: ToggleButtonsProps<T>) => {
  const {t} = useTranslation();

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
        <ToggleButton key={index} value={value}>{t(value)}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
