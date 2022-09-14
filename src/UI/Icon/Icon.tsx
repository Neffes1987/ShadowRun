import React, { ReactElement } from 'react';

import Agenda from './assets/agenda.svg';
import Bank from './assets/bank.svg';
import History from './assets/history.svg';
import Inventory from './assets/inventory.svg';
import Person from './assets/person.svg';
import Qr from './assets/qrCode.svg';

import { IconProps } from '../interface';

export const Icon = (props: IconProps): ReactElement | null => {
  const { type, color = 'blue', rotate = 0, size = 14 } = props;

  const iconProps = {
    testID: type,
    name: type,
    fill: color,
    color: color,
    style: {
      transform: [
        {
          rotate: `${rotate}deg`,
        },
      ],
      width: size,
      height: size,
    },
  };

  switch (type) {
    case 'qr':
      return <Qr {...iconProps} />;
    case 'bank':
      return <Bank {...iconProps} />;
    case 'agenda':
      return <Agenda {...iconProps} />;
    case 'passport':
      return <Person {...iconProps} />;
    case 'story':
      return <History {...iconProps} />;
    case 'inventory':
      return <Inventory {...iconProps} />;
    default:
      return null;
  }
};
