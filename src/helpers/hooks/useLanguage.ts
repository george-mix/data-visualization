import {useTranslation} from 'react-i18next';
import {supportedLanguages} from '@helpers/common/data';
import {SupportedLanguages} from '@helpers/common/enums';
import {getItem, setItem} from '@helpers/services/localStorage';

export const useLanguage = () => {
  const {i18n} = useTranslation();
  const currentLanguage = <SupportedLanguages>i18n.resolvedLanguage.toUpperCase();

  const changeLanguage = (newLanguage: SupportedLanguages) => {
    setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage.toLowerCase());
  };

  const savedLanguage = getItem('language');
  if (!savedLanguage) {
    setItem('language', currentLanguage);
  }

  if (savedLanguage && savedLanguage !== currentLanguage) {
    changeLanguage(savedLanguage);
  }

  const languages = supportedLanguages;

  return {currentLanguage, supportedLanguages: languages, changeLanguage};
};
