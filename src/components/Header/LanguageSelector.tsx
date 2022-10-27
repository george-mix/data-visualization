import React from 'react';
import {FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {useLanguage} from '@helpers/hooks/useLanguage';
import {SupportedLanguages} from '@helpers/common/enums';

export const LanguageSelector: React.FC = () => {
  const {currentLanguage, supportedLanguages, changeLanguage} = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    const language = event.target.value as SupportedLanguages;
    changeLanguage(language);
  };

  return (
    <FormControl variant="standard">
      <Select
        id="select-language"
        value={currentLanguage}
        displayEmpty
        onChange={handleLanguageChange}
      >
        {supportedLanguages.map((language) =>
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
