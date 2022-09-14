import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import { ALL_RPG_URL, AllRpgTag } from './constants';
import { UIButton } from './UI/Buttons/UIButton';
import { Flex } from './UI/Flex/Flex';
import { AppWebView } from './WebView/WebView';

const checkIsPortrait = (): boolean => {
  const dim = Dimensions.get('screen');

  return dim.height >= dim.width;
};

export const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState('');
  const [isPortrait, setIsPortrait] = useState(checkIsPortrait());

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setIsPortrait(checkIsPortrait());
    });
  }, []);

  function navigateTo(pageHash: AllRpgTag): void {
    setCurrentTab(pageHash.replace('#', ''));
  }

  function onShowQrCodeHandler(): void {
    navigateTo(AllRpgTag.QR);
  }

  function onShowGamePassportHandler(): void {
    navigateTo(AllRpgTag.GamePassport);
  }

  function onShowStoryHandler(): void {
    navigateTo(AllRpgTag.Info);
  }

  function onShowBankHandler(): void {
    navigateTo(AllRpgTag.Bank);
  }

  function onShowKeysHandler(): void {
    navigateTo(AllRpgTag.Keys);
  }

  function onShowLegendHandler(): void {
    navigateTo(AllRpgTag.Agenda);
  }

  const page = `#${currentTab}`;

  return (
    <SafeAreaView>
      <Flex align="flex-start" fullHeight direction={!isPortrait ? undefined : 'column'}>
        <Flex flex={4} shadowType="l1">
          <AppWebView baseUrl={`${ALL_RPG_URL}/start`} id={currentTab} />
        </Flex>

        <Flex direction={isPortrait ? undefined : 'column'} shrink={2} gap={8} justify="space-between" fullWidth={isPortrait}>
          <UIButton iconType="qr" onPress={onShowQrCodeHandler} fullWidth isSelected={page === AllRpgTag.QR} />

          <UIButton iconType="inventory" onPress={onShowKeysHandler} fullWidth isSelected={page === AllRpgTag.Keys} />

          <UIButton iconType="passport" onPress={onShowGamePassportHandler} fullWidth isSelected={page === AllRpgTag.GamePassport} />

          <UIButton iconType="story" onPress={onShowStoryHandler} fullWidth isSelected={page === AllRpgTag.Info} />

          <UIButton iconType="agenda" onPress={onShowLegendHandler} fullWidth isSelected={page === AllRpgTag.Agenda} />

          <UIButton iconType="bank" onPress={onShowBankHandler} fullWidth isSelected={page === AllRpgTag.Bank} />
        </Flex>
      </Flex>
    </SafeAreaView>
  );
};
