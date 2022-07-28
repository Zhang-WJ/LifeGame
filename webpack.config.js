const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.bs.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
          },
        ],
      },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({filename: "[name].css",
    chunkFilename: "[id].css",})]
}