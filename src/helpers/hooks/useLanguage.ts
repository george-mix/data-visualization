import {useTranslation} from 'react-i18next';
import {suppportedLanguages} from '@helpers/common/data';

export const useLanguage = () => {
  const {i18n} = useTranslation();
  const currentLanguage = i18n.resolvedLanguage.toUpperCase();

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage.toLowerCase());
  };

  const languages = suppportedLanguages;

  return {currentLanguage, suppportedLanguages: languages, changeLanguage};
};
