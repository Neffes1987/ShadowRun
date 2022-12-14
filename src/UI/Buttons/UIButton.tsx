import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { UIButtonProps } from '../interface';

import { BUTTON_STYLES_CONFIG } from './constants';

const COLORS = {
  inactiveText: '#191f14',
  activeText: '#fff',
  activeButton: 'rgba(37,97,79,0.99)',
  inactiveButton: '#fff',
};

export const UIButton = (props: UIButtonProps): ReactElement => {
  const { title, iconType, type = 'secondary', fullWidth, isSelected, ...rest } = props;

  const styles = { ...BUTTON_STYLES_CONFIG[type], marginBottom: 12, width: 32, backgroundColor: COLORS[isSelected ? 'activeButton' : 'inactiveButton'] };
  const captionStyle = {
    fontSize: 10,
    color: COLORS[isSelected ? 'activeText' : 'inactiveText'],
  };

  return (
    <Flex fullWidth={fullWidth} justify="center" align="center" styles={styles} {...rest} shadowType="l1">
      {iconType ? <Icon type={iconType} color={captionStyle.color} size={14} /> : <Text style={captionStyle}>{title}</Text>}
    </Flex>
  );
};
