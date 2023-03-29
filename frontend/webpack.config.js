const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    path: path.resolve(__dirname, "..", "backend", "static"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: process.env.PORT || 5555,
    historyApiFallback: true,
    open: false,
    hot: true,
    liveReload: true,
    devMiddleware: { writeToDisk: true },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public/icon",
          to: path.resolve(__dirname, "..", "backend", "static/icon"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@modals": path.resolve(__dirname, "src/modals"),
      "@store": path.resolve(__dirname, "src/store"),
      "@views": path.resolve(__dirname, "src/views"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss", "..."],
  },
};

module.exports = () => {
  return {
    ...config,
    mode: isProduction ? "production" : "development",
  };
};
