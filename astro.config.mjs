import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // see PocketBase Javascript sdk
  adapter: vercel(),
  integrations: [solidJs()]
});