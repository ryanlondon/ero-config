const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};