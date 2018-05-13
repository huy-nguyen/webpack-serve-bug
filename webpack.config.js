const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    filename: 'output.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
