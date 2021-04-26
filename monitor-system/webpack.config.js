const path = require('path');

// webpack 打包项目的 HtmlWebpackPlugin生成产出HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// user-agent 把浏览器的UserAgent变成一个对象

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 上下文目录
  context: process.cwd(),
  // 开发模式
  mode: 'development',
  output: {
    // 输出目录
    path: path.resolve(__dirname, 'dist'),
    // 输出文件名
    filename: 'monitor.js',
  },
  devServer: {
    // devServer静态文件根目录
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // 自动打包HTML文件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
    }),
  ],
};
