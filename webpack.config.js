// this file is magical webpack looks for it
const path = require('path');
const ExtraTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'  // add build when constructing the url for any loader that produces and output file
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // only files that satify this rule will be processed
      },
      {
        loader: ExtraTextPlugin.extract({   // This is bit different than regular loaders
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 } // allows us to pass some options to the loader
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    // Grab any content transfor by ExtraTextPlugin and output it to style.css
    new ExtraTextPlugin('style.css')
  ]
};

module.exports = config;

// Procedure for adding module (loader)
// npm install --save-dev
// Add the webpack config config

// For importing JS files
// Babel. It can be used as a webpack loader. Makes transformation on the files
// Loader do pre-processing
// - babel-loader: teaches babel how to work with webpack
// - babel-core: take code, transform it, and generate other files.
// but it does not anything about syntax
// - babel-preset-env: this contains the rules


// For importing css
// css-loader -> knows how to import the css file and read the content
// style-loader -> Takes css and adds them to the html document.
// PROBLEM by default webpack will toss your css into the header of your app
// You need to add extra config so that it creates a single css bundled file.
// Loading css and js in a file is a LOT slower than downloading them in separate
// files

// Extracting files
// 'extract-text-webpack-plugin'

// Plugin vs loader,
// loader: a bit of pre-processing before webpack generates the bundle
// plugin: works a bit outside the webpack pipeline and has the ability of keeping
// content from being toss into the bundle


// Images
// image-webpack-loader: compress the image for us
// url-loader:
  // if image is small -> include in the bundle.js
  // if image is big -> include in the output directory
