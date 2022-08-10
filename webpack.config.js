const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         use: [
  //           'style-loader',
  //           'css-loader',
  //           'sass-loader'
  //         ]
  //       }
  //     ]
  //   },
  devServer: {
    port: 9000,
    open: true,
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      title: 'Webpack App',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'
    })
  ]
}
