import webpackConfig from './webpack/test.config.babel';

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
export default (conf) => {
  conf.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine',
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage',
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'src/tests-entry.js',
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/tests-entry.js': ['webpack', 'sourcemap'],
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS',
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'html' },
      ],
    },

    webpack: webpackConfig,

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only',
    },
  });
};
