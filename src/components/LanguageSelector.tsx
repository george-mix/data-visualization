import React from 'react';
import {FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {suppportedLanguages} from '@helpers/common/data';

export const LanguageSelector: React.FC = () => {
  const {i18n} = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value.toLowerCase());
  };

  return (
    <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={i18n.resolvedLanguage.toUpperCase()}
        displayEmpty
        onChange={handleChange}
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

