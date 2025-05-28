const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/e2e/**/*.feature",
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    watchForFileChanges:false,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, // Enables "Run All" button
    env:{
        USERNAME: "Testeruser1",
        EMAIL1: "femihah219@betzenn.com",
        EMAIL: "koyifay211@betzenn.com",
        PASSWORD: "Testeruser1&",
        LOGIN_URL: '/login',
        SIGNUP_URL: '/signup',
        VIEW_CART_URL:'/view_cart',
        PRODUCTS_URL: '/products',

    },
    setupNodeEvents,
  },
});
