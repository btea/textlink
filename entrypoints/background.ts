export default defineBackground(() => {
  browser.contextMenus.create({
    id: 'textlink',
    title: '生成链接',
    contexts: ['page', 'selection'],
  });

  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'textlink' && tab) {
      // @ts-expect-error
      browser.tabs.sendMessage(tab.id, { action: 'getSelectionText' })
      // @ts-expect-error
        .then(response => {
          console.log('Selection text:', response.text);
        })
        .catch((error: any) => {
          console.error('Error getting selection text:', error);
        });
    }
  });
});
