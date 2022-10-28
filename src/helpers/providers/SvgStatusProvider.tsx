import React from 'react';
import {SvgLoader} from '@components/ChartElements/Status/SvgLoader';
import {SvgError} from '@components/ChartElements/Status/SvgError';

type SvgStatusProviderProps = {
  isLoading: boolean;
  isError: boolean;
}

const width = 640;
const height = 360;

export const SvgStatusProvider: React.FC<SvgStatusProviderProps> = ({
  children,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <SvgLoader width={width} height={height} />;
  }

  if (isError) {
    return <SvgError width={width} height={height} />;
  }

  return (
    <>
      {children}
    </>
  );
};
