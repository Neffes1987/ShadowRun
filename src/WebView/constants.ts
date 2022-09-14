export const hideBlocks = [
  '.fullpage_wrapper .header',
  '.fullpage_wrapper .footer',
  ' .maincontent .page_blocks .tabs > .ui-widget-header',
  '.mobile_menu',
  '.tasks_widget',
  '.conversations_widget',
];

export const DISABLED_STYLES = `${hideBlocks.toString()} {display: none !important;}`;
export const MAIN_CONTENT_STYLES = '.fullpage_wrapper .content {padding: 20px 0}';
export const FULLPAGE_WRAPPER_STYLES = '.fullpage_wrapper { width: 100%!important; margin-left: 0!important;}';

export const STYLES = `'${DISABLED_STYLES} ${MAIN_CONTENT_STYLES} ${FULLPAGE_WRAPPER_STYLES}'`;

export const SCRIPTS =
  "if (!window.subscribed){document.addEventListener('message', receiveMessage, false); function receiveMessage(event){if (event.data) { const anchor = document.getElementById(event.data); anchor?.click(); window.subscribed = true;}}}";

function injectStyles(): string {
  return `  
      const styleElement = document.createElement('style');
      styleElement.append(${STYLES});
      
      document.body.append(styleElement);
      
      try {
        const script = document.createElement('script');
        script.append("${SCRIPTS}");
        
        document.body.append(script);
      } catch(e) {
        document.body.append('<div>e.message</div>');
      }
    `;
}

export const INJECTED_SCRIPTS = injectStyles();
