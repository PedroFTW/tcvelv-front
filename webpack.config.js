const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'bin/'),
    },
    compress: true,
    port: 9000,
  },
};