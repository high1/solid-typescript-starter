const { DefinePlugin } = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CustomizeRule, mergeWithRules } = require('webpack-merge');
const { resolve } = require('path');
const development = require('./webpack.dev');
const production = require('./webpack.prod');

const common = (mode) => ({
  mode,
  devtool: false,
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: { auto: true },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new DefinePlugin({
      __MODE__: JSON.stringify(mode),
    }),
  ],
});

module.exports = (_, { mode = 'none' }) =>
  mergeWithRules({
    mode,
    module: {
      rules: {
        test: CustomizeRule.Match,
        use: CustomizeRule.Prepend,
      },
    },
  })(common(mode), mode === 'production' ? production : development);
