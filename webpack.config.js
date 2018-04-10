const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJSPlugin = require('uglify-js-plugin');

module.exports = {
 mode: 'production',
 context: path.resolve(__dirname, './src'),
 entry: {
   polyfills: './polyfills.ts',
   styles: './styles.css',
   app: './main.ts',
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
   }),
   new CompressionPlugin(
    {
      test: /\.js|\.html/,
      asset: '[path].gz[query]',
      cache: true,
      deleteOriginalAssets: true,
    }
  ),
  ]
};
