import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Electricity Prices",
        short_name: "Elpris",
        description: "Se aktuelle og tidligere elpriser.",
        lang: "da",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#27282B",
        theme_color: "#55EC20",
        icons: [
          {
            src: "/icons/16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/20.png",
            sizes: "20x20",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/29.png",
            sizes: "29x29",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/40.png",
            sizes: "40x40",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/50.png",
            sizes: "50x50",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/57.png",
            sizes: "57x57",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/58.png",
            sizes: "58x58",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/60.png",
            sizes: "60x60",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/64.png",
            sizes: "64x64",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/76.png",
            sizes: "76x76",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/80.png",
            sizes: "80x80",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/87.png",
            sizes: "87x87",
            type: "image/png",
            purpose: "any",
          },

          {
            src: "/icons/android-launchericon-96-96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
          },

          {
            src: "/icons/100.png",
            sizes: "100x100",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/114.png",
            sizes: "114x114",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/120.png",
            sizes: "120x120",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/167.png",
            sizes: "167x167",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any",
          },

          {
            src: "/icons/android-launchericon-48-48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-launchericon-72-72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-launchericon-144-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
