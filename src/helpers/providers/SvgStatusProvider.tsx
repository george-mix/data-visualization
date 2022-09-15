import React from 'react';
import {SvgLoader} from '@components/UI/SvgLoader';
import {SvgError} from '@components/UI/SvgError';

type SvgStatusProviderProps = {
  isLoading: boolean;
  isError: boolean;
}

export const SvgStatusProvider: React.FC<SvgStatusProviderProps> = ({
  children,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return <SvgLoader />;
  }

  if (isError) {
    return <SvgError />;
  }

  return (
    <>
      {children}
    </>
  );
};
