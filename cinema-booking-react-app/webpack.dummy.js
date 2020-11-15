const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Assets: path.resolve("src/assets"),
      Components: path.resolve("src/components"),
      hoc: path.resolve("src/hoc"),
      containers: path.resolve("src/containers"),
      context: path.resolve("src/context")
    },
  },
};