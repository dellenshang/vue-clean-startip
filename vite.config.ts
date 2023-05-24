import path from 'path'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    define: {
      'process.env.': env,
    },

    plugins: [
      vue(),
      VueI18nPlugin({
        include: [path.resolve(__dirname, './src/i18n/lang/**')],
      }),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      Components({
        dts: true,
        resolvers: [VantResolver()],
        types: [],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
        ],
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/core',
          'vitest',
        ],
      }),
    ],

    build: {
      assetsDir: 'static/img/',
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
    },

    resolve: {
      alias: {
        '@': resolve('./src')
      },
    },

    server: {
      host: true,
      port: 9600,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_TARGET,
          // secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
}
