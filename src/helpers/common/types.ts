import {SxProps} from '@mui/material';

export type KeysOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V? P: never]: any
};

export type TextComponentProps = {
  text: string;
  sx?: SxProps
}
