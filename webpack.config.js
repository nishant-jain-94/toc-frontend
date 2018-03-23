const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: {
   polyfills: path.resolve(__dirname, './polyfills.ts'),
   app: path.resolve(__dirname, './app.module.ts'),
 },
 output: {
   path: path.resolve(__dirname, './dist'),
   filename: '[name].js',
 },
 module: {
   rules: [
     { test: /\.ts/, use: 'ts-loader' }
   ]
 },
 resolve: {
  extensions: [".js", ".ts"],
 },
 plugins: [
   new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)/, path.resolve(__dirname, './src')
   ),
   new HtmlWebpackPlugin({
     title: 'Ng Boilerplate',
     template: 'index.html'
   })
  ]
};
