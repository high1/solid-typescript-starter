const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebackPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { resolve } = require('path');

module.exports = (_, { mode = 'none' }) => ({
  mode,
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  devtool: mode === 'development' ? 'inline-source-map' : false,
  devServer: {
    port: 3000,
    hot: true,
  },
  target: mode === 'development' ? 'web' : 'browserslist',
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
            loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: { auto: true },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/i,
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
    ...(mode === 'development'
      ? [new ForkTsCheckerWebpackPlugin(), new HotModuleReplacementPlugin()]
      : [
          new MiniCssExtractPlugin(),
          new ESLintPlugin({
            emitError: true,
          }),
          new CleanWebpackPlugin(),
        ]),
  ],
  optimization: {
    minimizer: [
      ...(mode === 'development' ? [] : [new TerserWebackPlugin(), new CssMinimizerPlugin()]),
    ],
    runtimeChunk: mode === 'development' ? undefined : 'single',
    splitChunks:
      mode === 'development'
        ? false
        : {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name({ context }) {
                  if (context) {
                    const [, name] =
                      /[\\/]node_modules(?:\\.pnpm)?[\\/](.*?)(?:[\\/]|$)/.exec(context) || [];
                    return name.replace('@', '');
                  }
                  return null;
                },
              },
            },
          },
  },
});
