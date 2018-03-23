const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'development',
 entry: {
   polyfills: path.resolve(__dirname, './polyfills.ts'),
   styles: './styles.css',
   app: path.resolve(__dirname, './app.module.ts'),
 },
 output: {
   path: path.resolve(__dirname, './dist'),
   filename: '[name].js',
 },
 module: {
   rules: [
     { test: /\.ts/, use: ['ts-loader', 'angular2-template-loader'] },
     { test: /\.html$/, use: 'raw-loader' },
     { test: /\.css$/, use: ['to-string-loader', 'style-loader', 'css-loader'] },
   ]
 },
 resolve: {
  extensions: [".js", ".ts", ".html", ".css", ".ico"],
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
