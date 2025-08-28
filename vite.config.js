import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => ({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: mode === "development",
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
            "@assets": resolve(__dirname, "resources/assets"),
        },
    },
    build: {
        manifest: "manifest.json",
        outDir: "public/build",
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (
                        assetInfo.name.endsWith(".woff") ||
                        assetInfo.name.endsWith(".woff2") ||
                        assetInfo.name.endsWith(".ttf") ||
                        assetInfo.name.endsWith(".otf")
                    ) {
                        return "assets/fonts/[name].[hash][extname]";
                    }
                    if (assetInfo.name.endsWith(".svg")) {
                        return "assets/images/[name].[hash][extname]";
                    }
                    return "assets/[name].[hash][extname]";
                },
                // Optimize chunk splitting for better caching
                manualChunks: {
                    "react-vendor": ["react", "react-dom"],
                    "framer-motion": ["framer-motion"],
                    "react-icons": ["react-icons"],
                },
            },
        },
        // Performance optimizations
        minify: mode === "production" ? "terser" : false,
        target: "es2015",
        sourcemap: mode === "development",
    },
    publicDir: "public",
    server: {
        host: "127.0.0.1",
        port: 5173,
    },
    // Performance optimizations for development
    optimizeDeps: {
        include: ["react", "react-dom", "framer-motion", "react-icons"],
        force: false,
    },
    esbuild: {
        // Enable JSX fragment optimization
        jsxFragment: "Fragment",
        jsxFactory: "React.createElement",
        target: "es2015",
    },
}));
