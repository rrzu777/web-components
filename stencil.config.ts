import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ui-web-components',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    // uncomment the following code to test in local
    // {
    //   type: 'docs-readme'
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null // disable service workers
    // }
  ],
  plugins: [
    sass()
  ]
};
