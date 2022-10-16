import React from 'react';
import {PieArcDatum, arc, pie, scaleOrdinal} from 'd3';
import {ResponsiveSvg} from '@components/ChartElements/ResponsiveSvg';
import {PieChartPart} from '@components/ChartElements/PieChartPart';
import {useColorScheme} from '@helpers/hooks/useColorScheme';
import {GetText, LanguageInfo} from './languagePercentageTypes';

type ChartProps = {
  languageData: LanguageInfo[];
  getText: GetText;
}

const width = 600;
const height = 500;
const coefficient = width / height;
const radius = Math.min(width, height) / 2;
const translateWidth = radius * coefficient;
const translateHeight = radius;
const donutInnerRadius = radius * 0.6;
const donutOutterRadius = radius * 0.7;
const labelRadius = radius * 0.8;

export const LanguagePercentageSvg: React.FC<ChartProps> = ({languageData, getText}) => {
  const colorScheme = useColorScheme<string[]>('schemeOne');
  const colors = scaleOrdinal(colorScheme);

  const createPie = pie<LanguageInfo>()
    .value((d) => d.quantity)
    .sort(null);

  const createArc = arc<PieArcDatum<LanguageInfo>>()
    .innerRadius(donutInnerRadius)
    .outerRadius(donutOutterRadius);

  const createAnnotationArc = arc<PieArcDatum<LanguageInfo>>()
    .innerRadius(labelRadius)
    .outerRadius(labelRadius);

  const getAnnotationText = (languageArc: LanguageInfo) => {
    const annotation = getText(languageArc);
    return annotation;
  };

  const languageDonutArcs = createPie(languageData);

  return (
    <ResponsiveSvg
      width={width}
      translateWidth={translateWidth}
      height={height}
      translateHeight={translateHeight}
    >
      {
        languageDonutArcs.map((languageArc, index) => (
          <PieChartPart<LanguageInfo>
            key={languageArc.data.language}
            arc={languageArc}
            createArc={createArc}
            createAnnotationArc={createAnnotationArc}
            index={index}
            colors={colors}
            annotation={getAnnotationText(languageArc.data)}
          />
        ))
      }
    </ResponsiveSvg>
  );
};
