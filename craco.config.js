const webpack = require('webpack');

module.exports = {
  jest: {
    configure: (config) => {
      config.moduleNameMapper = {
        ...config.moduleNameMapper,
        '^react-router-dom$': '<rootDir>/node_modules/react-router-dom/dist/index.js',
        '^react-router$': '<rootDir>/node_modules/react-router/dist/development/index.js',
        '^react-router/dom$': '<rootDir>/node_modules/react-router/dist/development/dom-export.js',
      };
      return config;
    },
  },
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        buffer: require.resolve('buffer/')
      };
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        })
      );
      return config;
    },
  },
};
