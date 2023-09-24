module.exports = {
  dev: (config) => {
    //override webpack configuration
    // config.externals = [];
    config.resolve.fallback = { path: require.resolve("path-browserify") };
    return config;
  },
  prod: (config) => {
    //override webpack configuration
    // config.externals = [];
    config.resolve.fallback = { path: require.resolve("path-browserify") };
    return config;
  },
};
