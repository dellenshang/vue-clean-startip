import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import { svgSprite } from './src/plugins/svg-sprite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    [svgSprite('./src/assets/icons/svg/')],
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // presets
        'vue',
        'vue-router',
        'vue-i18n',
        // custom
        {
          // '@vueuse/core': [
          //   // named imports
          //   'useMouse', // import { useMouse } from '@vueuse/core',
          //   // alias
          //   ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
        }
      ]
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      resolvers: [
        NaiveUiResolver()
      ]
    }),
    viteCompression({
      //生成压缩包gz
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip', // brotli压缩 : 'brotliCompress'
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      comps: resolve(__dirname, 'src/components'),
      api: resolve(__dirname, 'src/api'),
      '/images': 'src/assets/images'
    }
  },
  css: {
    //配置 CSS modules 的行为。选项将被传递给 postcss-modules。
    modules: {},
    // PostCSS 配置（格式同 postcss.config.js）
    // postcss-load-config 的插件配置
    postcss: {
      plugins: [
        // 前缀追加
        require('autoprefixer')({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%'
          ],
          grid: true
        }),
        require('postcss-flexbugs-fixes')
      ]
    },
    //指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      scss: {
        // eslint-disable-next-line quotes
        additionalData: `$injectedColor: orange;`
      }
    }
  },
  server: {
    //服务器主机名
    host: '0.0.0.0',
    //端口号
    port: '9600',
    //设为 true 时若端口已被占用则会直接退出，
    //而不是尝试下一个可用端口
    strictPort: true,
    //https.createServer()配置项
    https: '',
    open: true,
    //自定义代理规则
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
      // 正则
      // '^/api/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
    //开发服务器配置 CORS
    //boolean | CorsOptions
    cors: {},
    //设置为 true 强制使依赖预构建
    force: true,
    //禁用或配置 HMR 连接
    hmr: {},
    //传递给 chokidar 的文件系统监视器选项
    watch: {}
  },
  build: {
    assetsDir: 'static/img/',
    brotliSize: false, //  打包时计算大小
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
  }
})
