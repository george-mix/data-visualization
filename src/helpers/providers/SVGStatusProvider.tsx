import React from 'react';
import {SVGLoader} from '@components/UI/SVGLoader';
import {SVGError} from '@components/UI/SVGError';

type SVGStatusProviderProps = {
  isLoading: boolean;
  isError: boolean;
}

export const SVGStatusProvider: React.FC<SVGStatusProviderProps> = ({
  children,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <SVGLoader />;
  }

  if (isError) {
    return <SVGError />;
  }

  return (
    <>
      {children}
    </>
  );
};
