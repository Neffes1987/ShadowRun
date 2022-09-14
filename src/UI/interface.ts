import { FlexStyle, PressableProps, StyleProp, TouchableOpacityProps } from 'react-native';

export interface FlexProps {
  direction?: FlexStyle['flexDirection'];
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  grow?: FlexStyle['flexGrow'];
  shrink?: FlexStyle['flexShrink'];
  wrap?: FlexStyle['flexWrap'];
  flex?: FlexStyle['flex'];
  width?: FlexStyle['width'];
  height?: FlexStyle['height'];
  marginX?: FlexStyle['marginHorizontal'];
  marginY?: FlexStyle['marginVertical'];
  radius?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  gapY?: number;
  gapX?: number;
  gap?: number;
  shadowType?: 'l1' | 'l2' | 'l3';
  styles?: StyleProp<unknown>;
  onPress?: PressableProps['onPress'];
  testID?: string;
}

export type UIButtonPropsType = 'primary' | 'secondary' | 'round';
export interface UIButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary';
  title: string;
  fullWidth?: boolean;
  isSelected?: boolean;
}
