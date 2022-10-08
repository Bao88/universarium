import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: "/admin/",
    plugins: [
      vue({
        template: { transformAssetUrls },
        reactivityTransform: true
      }),
      quasar()
    ]
  })
}
