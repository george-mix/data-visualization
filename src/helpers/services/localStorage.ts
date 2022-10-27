import {ThemeMode} from '@store/theme/themeTypes';
import {SupportedLanguages} from '@helpers/common/enums';
import {combineTwoStrings} from '@helpers/functions/stringUtils';

const prefix = 'dviz_';

type ThemeModeKey = 'themeMode';
type LanguageKey = 'language';
type LSKeys = ThemeModeKey | LanguageKey;
type LSValues<Key> = Key extends ThemeModeKey ? ThemeMode
  : Key extends LanguageKey ? SupportedLanguages
    : string;

export const getItem = <Key extends LSKeys>(key: Key): LSValues<Key> | null => {
  const result = localStorage.getItem(combineTwoStrings(prefix, key));
  if (result) {
    return result as LSValues<Key>;
  }

  return null;
};

export const setItem = <Key extends LSKeys>(key: Key, value: LSValues<Key>) => {
  localStorage.setItem(combineTwoStrings(prefix, key), value);
};
