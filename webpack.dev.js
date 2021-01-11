const { EvalSourceMapDevToolPlugin, HotModuleReplacementPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
  },
  target: 'web',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new EvalSourceMapDevToolPlugin({
      test: /\.(m?js|ts)x?$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader'],
      },
    ],
  },
};
