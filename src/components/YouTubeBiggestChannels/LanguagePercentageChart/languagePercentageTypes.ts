export interface LanguageInfo {
  language: string;
  quantity: number;
}

export type InfoType = 'subscribers' | 'channels';

export type SwitchQuantitySource = () => void;

export type GetText = (_languageData: LanguageInfo) => string;
