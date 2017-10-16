// this file is magical webpack looks for it
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // only files that satify this rule will be processed
      }
    ]
  }
};

module.exports = config;


// Babel. It can be used as a webpack loader. Makes transformation on the files
// Loader do pre-processing
// - babel-loader: teaches babel how to work with webpack
// - babel-core: take code, transform it, and generate other files.
// but it does not anything about syntax
// - babel-preset-env: this contains the rules
