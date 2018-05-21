const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { test: /\.handlebars$/, loader: "handlebars-loader" },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }  
    ]
  }
};