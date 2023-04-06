// 代码自动生成,
// 将项目中的 *.graphql 生成对应钩子函数
// see: https://www.graphql-code-generator.com/、https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/**/*.graphql',
  watchConfig: {
    interval: 100,
    usePolling: true,
  },
  generates: {
    'src/store/graphql/index.ts': {
      plugins: ['add', 'typescript', 'typescript-operations', 'typescript-rtk-query'],
      config: {
        content: `/* eslint-disable */
          /**
           *
           * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
           *
           * instead, edit one of the .graphql files in this project and run
           *
           * npm run graphql-codegen
           *
           * for this file to be re-created
           */
          export * from './extend'
        `,
        exportHooks: true,
        fetcher: 'graphql-request',
        importBaseApiFrom: '@store/graphql/extend',
      },
    },
    '.introspection.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;

