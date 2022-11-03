import React from 'react';
import {Typography} from '@mui/material';
import {JamesBondFilmData} from '@helpers/common/interfaces';

type FilmMarkTooltipContentProps = {
  film: JamesBondFilmData;
  moneyAmount: number;
}

export const FilmMarkTooltipContent: React.FC<FilmMarkTooltipContentProps> = ({
  film,
  moneyAmount,
}) => (
  <>
    <Typography>{film.year}</Typography>
    <Typography>{film.title}</Typography>
    <Typography>${moneyAmount.toFixed(1)} million</Typography>
  </>
);
