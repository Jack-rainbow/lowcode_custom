import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import VitePluginStyleInject from 'vite-plugin-style-inject'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx()
  ],
  css: {
    modules: {
      generateScopedName: '[name]-[local]-[hash:base64:6]'
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'demo',
      formats: ['es', 'umd', 'cjs', 'iife']
    },
    outDir: path.resolve(__dirname, '../../dist/demo'),
    rollupOptions: {
      external: ['vue', 'lodash', '@syc-lowcode/base', '@syc-lowcode/client-framework', 'monaco-editor/esm/vs/editor/editor.api'],
      plugins: [
        VitePluginStyleInject(),
        peerDepsExternal({
          includeDependencies: true // speed up
        }),
        babel({
          exclude: 'node_modules/**'
        })
      ],

      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@syc-saas/ui': 'ssu',
          '@syc-lowcode/base': 'SycLowcodeBase',
          '@syc-lowcode/client-framework': 'SycLowcodeClientFramework',
          'monaco-editor/esm/vs/editor/editor.api': 'MonacoEditor'
        }
      }
    }
  }
})
