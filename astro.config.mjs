// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  devToolbar: {
      enabled: false
  },

  adapter: vercel(),
});