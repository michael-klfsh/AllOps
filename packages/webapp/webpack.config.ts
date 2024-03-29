import * as path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

module.exports = (
  env: { development?: boolean; platform?: string; dotenv?: boolean } = {}
) => ({
  mode: "development",
  entry: {
    app: "./src/index",
  },
  output: {
    path: path.resolve(__dirname, `build/${env.platform as string}`),
    publicPath: "/",
    filename: "js/[name].js",
    sourceMapFilename: "js/[name].map",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: "url-loader",
        options: {
          limit: "25000",
          outputPath: "profile-pictures/",
          publicPath: "profile-pictures/",
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: { outputPath: "fonts/", publicPath: "fonts/" },
      },
      {
        test: /\.svg$/,
        enforce: "pre",
        loader: require.resolve("@svgr/webpack"),
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      path: require.resolve("path-browserify"),
      fs: false,
      os: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "assets/index.html",
    }),
    new DotenvWebpackPlugin(),
    // env.dotenv
    //   ? new DotenvWebpackPlugin()
    //   : new webpack.EnvironmentPlugin(Object.keys(configValues)),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "common",
          chunks: "all",
        },
      },
    },
  },
  performance: {
    hints: false,
  },
  devServer: {
    // port: configService.get("PORT"),
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-source-map", // TODO setting this to false or "source-map" solves the warning overload bug on console.. why?
});
