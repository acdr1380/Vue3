import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Inspect from 'vite-plugin-inspect';
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default ({ mode }) => {
    const { VITE_APP_SERVER } = loadEnv(mode, process.cwd());
    return defineConfig({
        plugins: [vue(), Inspect()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            strictPort: true,
            port: 3001,
            cors: true,
            proxy: {
                [VITE_APP_SERVER]: {
                    target: 'http://localhost:5001',
                    changeOrigin: true,
                    logLevel: 'debug',
                    rewrite: path => path.replace(VITE_APP_SERVER, ''),
                },
            },
            hmr: true,
        },
    });
};
