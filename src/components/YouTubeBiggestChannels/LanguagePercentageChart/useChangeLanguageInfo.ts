import {useState} from 'react';
import {flatRollup, rollups, sum} from 'd3';
import {YouTubeChannelData} from '@helpers/common/interfaces';
import {getPercentageString} from '@helpers/functions/mathUtils';
import {GetText, InfoType, LanguageInfo, SwitchQuantitySource} from './languagePercentageTypes';

export const useChangeLanguageInfo = (data: YouTubeChannelData[]) => {
  const [infoType, setinfoType] = useState<InfoType>('channels');

  const switchQuantitySource: SwitchQuantitySource = () => {
    const newInfoType = infoType === 'subscribers' ? 'channels' : 'subscribers';
    setinfoType(newInfoType);
  };

  const getSubscribersLanguageData = (): LanguageInfo[] => {
    const subscribersLanguageData = flatRollup(
      data,
      (value) => sum(value, (channel) => channel.subscribers),
      (channel) => channel.primaryLanguage,
    )
      .map((language) => ({
        language: language[0],
        quantity: language[1],
      }));
    return subscribersLanguageData;
  };

  const getChannelsLanguageData = (): LanguageInfo[] => {
    const languageData = rollups(
      data,
      (v) => v.length,
      (d) => d.primaryLanguage,
    )
      .map(([language, quantity]) => ({language, quantity}));
    return languageData;
  };

  const getSubscribersText = (totalQuantity: number) => (languageData: LanguageInfo) => {
    const percentage = getPercentageString(
      languageData.quantity,
      totalQuantity,
    );
    return `${languageData.language} (${percentage})`;
  };

  const getChannelsText = (languageData: LanguageInfo) => (
    `${languageData.language} (${languageData.quantity})`
  );

  const getLanguageData = (infoType: InfoType) => {
    if (infoType === 'subscribers') {
      const languageData = getSubscribersLanguageData();
      const totalQuantity = languageData.reduce(
        (accumulator, language) =>
          accumulator + language.quantity,
        0,
      );
      const getText: GetText = getSubscribersText(totalQuantity);
      return {
        languageData: getSubscribersLanguageData(),
        getText,
      };
    }

    return {
      languageData: getChannelsLanguageData(),
      getText: getChannelsText,
    };
  };

  const languageData = getLanguageData(infoType);

  return {
    ...languageData,
    switchQuantitySource,
    infoType,
  };
};
