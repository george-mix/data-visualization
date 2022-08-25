import React from 'react';
import {
  PieArcDatum,
  arc,
  flatRollup,
  pie,
  scaleOrdinal,
  schemeSet3,
  sum,
} from 'd3';
import {YouTubeChannelData} from '@common/interfaces';
import {PieArc} from '@components/ChartElements/PieArc';

interface SubscriberLanguage {
  primaryLanguage: string,
  subscriberQuantity: number,
}

const width = 450;
const height = 450;
const margin = {top: 100, right: 100, bottom: 20, left: 20};
const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;

type ChartProps = {
  data: YouTubeChannelData[];
}

export const LanguagePercentageChart: React.FC<ChartProps> = ({data}) => {
  const colors = scaleOrdinal(schemeSet3);

  const languageData: SubscriberLanguage[] = flatRollup(
    data,
    (value) => sum(value, (d) => d.subscribers),
    (d) => d.primaryLanguage,
  )
    .map((language) => ({
      primaryLanguage: language[0],
      subscriberQuantity: language[1],
    }));

  const createPie = pie<SubscriberLanguage>()
    .value((d) => d.subscriberQuantity)
    .sort(null);

  const createArc = arc<PieArcDatum<SubscriberLanguage>>()
    .innerRadius(radius)
    .outerRadius(100);

  const languagePieArcs = createPie(languageData);

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${radius},${radius})`}>
        {languagePieArcs.map((language, index) => (
          <PieArc<SubscriberLanguage>
            key={language.data.primaryLanguage}
            data={language}
            index={index}
            createArc={createArc}
            colors={colors}
            text={language.data.primaryLanguage}
          />
        ))}
      </g>
    </svg>
  );
};

