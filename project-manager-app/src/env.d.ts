/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string
  readonly VITE_APP_BASE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}