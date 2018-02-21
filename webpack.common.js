const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  entry: {
    romcal: [
      'bootstrap-loader',
      './src/index.jsx'
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
      { test: /\.jsx?$/, loader: "babel-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // Bootstrap icon fonts
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },

  plugins: [
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
