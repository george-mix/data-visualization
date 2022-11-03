import React, {useState} from 'react';
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import {Box} from '@mui/material';
import {JamesBondFilmData} from '@helpers/common/interfaces';
import {SvgCircle} from '@components/ChartElements/General/SvgCircle';
import {FilmMarkTooltipContent} from './FilmMarkTooltipContent';

type FilmMarkProps = {
  film: JamesBondFilmData;
  cx: number;
  cy: number;
  moneyAmount: number;
}

const circleRadius = 6;
const circleStrokeWidth = 20;

export const FilmMark: React.FC<FilmMarkProps> = ({film, cx, cy, moneyAmount}) => {
  const [isOpen, setIsOpen] = useState(false);

  const {x, y, reference, floating, strategy, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip(), shift()],
  });

  const hover = useHover(context, {move: false});
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: 'tooltip'});

  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    dismiss,
    role,
  ]);

  return (
    <>
      <SvgCircle
        innerRef={reference}
        {...getReferenceProps()}
        cx={cx}
        cy={cy}
        r={circleRadius}
        strokeWidth={circleStrokeWidth}
        stroke="transparent"
      />
      <FloatingPortal>
        {isOpen && (
          <Box
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            }}
            sx={{
              bgcolor: 'background.default',
              p: 1,
            }}
            {...getFloatingProps()}
          >
            <FilmMarkTooltipContent film={film} moneyAmount={moneyAmount} />
          </Box>
        )}
      </FloatingPortal>
    </>
  );
};
