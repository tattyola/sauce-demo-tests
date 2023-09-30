// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  // fullyParallel: true,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on',
    video: 'on',
    testIdAttribute: 'data-test',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});

