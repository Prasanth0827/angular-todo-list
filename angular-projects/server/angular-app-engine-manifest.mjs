
export default {
  basePath: 'https://Prasanth0827.github.io/angular-todo-list',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
