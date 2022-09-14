import React, { useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';

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

  return (
    <WebView
      geolocationEnabled
      scalesPageToFit
      injectedJavaScript={INJECTED_SCRIPTS}
      source={{ uri: baseUrl }}
      ref={webView}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
