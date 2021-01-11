const TerserWebackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // devtool: false,
  target: 'browserslist',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      emitError: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserWebackPlugin(), new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
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
};
