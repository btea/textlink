import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: ['contextMenus']
  },
  webExt: {
    startUrls: ['https://vuejs.org/'],
  }
});
