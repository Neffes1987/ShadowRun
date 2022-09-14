import React, { useEffect, useRef } from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewNavigation } from 'react-native-webview/lib/WebViewTypes';

import { INJECTED_SCRIPTS } from './constants';
import { AppWebViewProps } from './interface';

export const AppWebView = (props: AppWebViewProps): JSX.Element => {
  const { baseUrl, id } = props;
  const webView = useRef<WebView>(null);

  useEffect(() => {
    if (id) {
      webView.current?.postMessage(id);
    }
  }, [id]);

  function onNavigationChanged(event: WebViewNavigation): void {
    const { url } = event;

    if (url.includes('t.me')) {
      Linking.openURL(url);
      webView.current?.goBack();
    }
  }

  return (
    <WebView
      geolocationEnabled
      scalesPageToFit
      onNavigationStateChange={onNavigationChanged}
      injectedJavaScript={INJECTED_SCRIPTS}
      source={{ uri: baseUrl }}
      ref={webView}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
