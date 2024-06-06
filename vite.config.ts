import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      open: true,
      strictPort: true,
      host: true,
      port: 3000,
    },
    define: {
      VITE_ORIGIN: JSON.stringify(env.VITE_ORIGIN)
    }
    
  }
})
