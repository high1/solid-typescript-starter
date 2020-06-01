import { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserWebackPlugin from 'terser-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const config = (_env: unknown, { mode = 'none' }: Configuration): Configuration => ({
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
    ...(mode === 'development' ? [new ForkTsCheckerWebpackPlugin()] : []),
  ],
  optimization: {
    minimizer: [
      ...(mode === 'development' ? [] : [new TerserWebackPlugin(), new OptimizeCSSAssetsPlugin()]),
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
                name({ context }: { context: string }): string | null {
                  if (context) {
                    const [, name] = /[\\/]node_modules[\\/](.*?)([\\/]|$)/.exec(context) || [];
                    return name.replace('@', '');
                  }
                  return null;
                },
              },
            },
          },
  },
});

export default config;
