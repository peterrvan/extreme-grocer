const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/search.js',
  output: {
      path: path.resolve(__dirname, "client/build"),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
      }
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  devServer: {
    port: 8080,
    compress: true,
    publicPath: '/build/',
    proxy: {
      '/search': 'http://localhost:3000',
    }
  }
}