import React from 'react';
import {ScaleLinear, curveCatmullRom, line} from 'd3';
import {JamesBondFilmData} from '@helpers/common/interfaces';
import {SvgPath} from '@components/ChartElements/General/SvgPath';
import {FilmMark} from './FilmMark';

type FinancialTimelineMarksProps = {
  xScale: ScaleLinear<number, number, never>;
  xValue: (_film: JamesBondFilmData) => number;
  yScale: ScaleLinear<number, number, never>;
  yValue: (_film: JamesBondFilmData) => number;
  films: JamesBondFilmData[];
}

export const FinancialTimelineMarks: React.FC<FinancialTimelineMarksProps> = ({
  xScale,
  xValue,
  yScale,
  yValue,
  films,
}) => (
  <g>
    <SvgPath
      fill="none"
      pathStroke={{color: 'primary', alpha: 0.8}}
      d={line<JamesBondFilmData>()
        .x((film) => xScale(xValue(film)))
        .y((film) => yScale(yValue(film)))
        .curve(curveCatmullRom)(films) ?? ''}
    />
    {
      films.map((film, index) => (
        <FilmMark
          key={index}
          film={film}
          cx={xScale(xValue(film))}
          cy={yScale(yValue(film))}
          moneyAmount={yValue(film)}
        />
      ))
    }
  </g>
);
