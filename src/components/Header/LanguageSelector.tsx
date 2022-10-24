import React from 'react';
import {FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {useLanguage} from '@helpers/hooks/useLanguage';

export const LanguageSelector: React.FC = () => {
  const {currentLanguage, suppportedLanguages, changeLanguage} = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="standard">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentLanguage}
        displayEmpty
        onChange={handleLanguageChange}
      >
        {suppportedLanguages.map((language) =>
          <MenuItem
            key={language}
            value={language}
          >
            {language}
          </MenuItem>)}
      </Select>
    </FormControl>
  );
};
