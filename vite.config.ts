import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
      '@': '/src',
			'@Components':  '/src/Components',
			'@Backend':  '/src/Backend',
			'@Pages':  '/src/Pages',
			'@Dashboard':  '/src/screens/home',
			'@functions':  '/src/functions',
			'@Context':  '/src/Context',
			'@Data':  '/src/Data',
			'@Images':  '/src/assets',
			// Add more aliases here if needed
		},
	},
})
