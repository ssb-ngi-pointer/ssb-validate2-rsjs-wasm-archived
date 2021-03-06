// SPDX-FileCopyrightText: 2021 Andrew 'glyph' Reid
//
// SPDX-License-Identifier: Unlicense

// Karma configuration

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ".",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "esm"],

    // list of files / patterns to load in the browser
    files: [{ pattern: "test/test.mjs", type: "module" }],

    // list of files / patterns to exclude
    exclude: [],

    plugins: [
      // load plugin
      require.resolve("@open-wc/karma-esm"),
      "karma-mocha",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
    ],

    esm: {
      nodeResolve: true,
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    client: {
      clearContext: false,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // Set this to `false` for easier in-browser debugging
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
