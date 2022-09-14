import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { ALL_RPG_URL, AllRpgTag } from './constants';
import { UIButton } from './UI/Buttons/UIButton';
import { Flex } from './UI/Flex/Flex';
import { AppWebView } from './WebView/WebView';

export const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>('');

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
      <Flex align="flex-start" fullHeight>
        <Flex flex={4} shadowType="l1">
          <AppWebView baseUrl={`${ALL_RPG_URL}/start`} id={currentTab} />
        </Flex>

        <Flex direction="column" flex={1}>
          <Text
            style={{
              fontSize: 10,
            }}
          >
            SHADOWRUN ALPHA
          </Text>

          <UIButton title="QR-Code" onPress={onShowQrCodeHandler} fullWidth isSelected={page === AllRpgTag.QR} />

          <UIButton title="Inventory" onPress={onShowKeysHandler} fullWidth isSelected={page === AllRpgTag.Keys} />

          <UIButton title="Character Passport" onPress={onShowGamePassportHandler} fullWidth isSelected={page === AllRpgTag.GamePassport} />

          <UIButton title="Character Story" onPress={onShowStoryHandler} fullWidth isSelected={page === AllRpgTag.Info} />

          <UIButton title="Character legend" onPress={onShowLegendHandler} fullWidth isSelected={page === AllRpgTag.Agenda} />

          <UIButton title="Bank" onPress={onShowBankHandler} fullWidth isSelected={page === AllRpgTag.Bank} />
        </Flex>
      </Flex>
    </SafeAreaView>
  );
};
