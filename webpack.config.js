const path = require("path");
const CleanPlugin = require("clean-webpack-plugin"); // 웹팩플러그인 불러오기

module.exports = {
  mode: "production", //배포용
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //dev서버 경로 삭제
  },
  devtool: "none",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
