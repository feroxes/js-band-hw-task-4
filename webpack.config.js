const path = require('path');
const MiniSccExtractPlugin = require('mini-css-extract-plugin');
module.exports = {entry: {
  app: './src/index.js',}, output: {
  filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'},
  module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniSccExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: {path: 'src/config/postcss.config.js'} }
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        MiniSccExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: {path: 'src/config/postcss.config.js'} }
        },
      ]
    }
    ]
  },
  devServer: {
  overlay: true,
  },
  plugins: [
    new MiniSccExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
