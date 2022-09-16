import {SvgIconTypeMap, SxProps} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

export type KeysOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V? P: never]: any
};

export type TextComponentProps = {
  text: string;
  sx?: SxProps
}

export type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string;
}
