export default defineContentScript({
  matches: ['*://*/*'],
  main() {
    browser.runtime.onMessage.addListener((message) => {
      if (message.action === 'getSelectionText') {
        const selection = window.getSelection();
        if (selection && selection.toString()) {
          const url = location.href
          const newUrl = `${url}#:~:text=${encodeURIComponent(selection.toString())}`;
          navigator.clipboard.writeText(newUrl).then(() => {
            alert(`已复制链接: ${newUrl}`);
          }).catch(() => {
            alert('复制链接失败，请手动复制');
          });
        } else {
          alert('未选中任何文本');
        }
      }
      return true; // Indicates that the response will be sent asynchronously
    });
  },
});
