const packageJson = require('../package.json');

module.exports = function(config) {
  // Custom vite config here
  const output = config?.build?.rollupOptions?.output;
  const external = config?.build?.rollupOptions?.external || [];
  output.map((obj) => {
    if(obj.sourcemap) {
      obj.sourcemap = false;
    }
  })
  external.push(...Object.keys(packageJson.dependencies))
  return config;
};
