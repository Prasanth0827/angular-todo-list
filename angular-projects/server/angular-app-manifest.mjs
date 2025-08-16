
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Prasanth0827.github.io/angular-todo-list/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-OROQ26IK.js"
  ]
},
  assets: {
    'index.csr.html': {size: 68816, hash: 'e497acbe1adf3d7db29d724caa324e2b584c058f3f16df41a230af9a6ab27415', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17224, hash: 'efc1270bdb0b40ee5c4e0fa2dd5295ecff46f413b76bfc232f38d888fc470c71', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DXLX6QOT.css': {size: 100869, hash: 'rhQuiO+6Ong', text: () => import('./assets-chunks/styles-DXLX6QOT_css.mjs').then(m => m.default)}
  },
};
