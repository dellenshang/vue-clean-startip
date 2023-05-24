/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_USER_NODE_ENV: 'development' | 'production' | 'cool'
  readonly VITE_APP_API_TARGET: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_PUBLIC_PATH: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
