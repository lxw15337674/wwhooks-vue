import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { resolve } from 'path'

// 輸出

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  srcDir: '../src',
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
  },
  vite: {
    plugins: [
      AutoSidebar({
        path: 'src',
        // titleFromFile: true,
        // ignoreIndexItem: true,
        sideBarItemsResolved: (opt) => {
          // 如果text文件名包含".",则过滤掉
          return opt.filter((item) => !item?.text?.includes('.'));
        },
        sideBarResolved: (opt) => {
          // 扁平化
          return opt;
        },
      }),
    ],
    resolve: {
      alias: {
        'src': resolve('./src'),
        'www-components-vue': resolve('./src'),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
