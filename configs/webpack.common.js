var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var DEBUG = !process.argv.includes('--release')
var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
}

module.exports = {
  entry: {
    'app': './src/index.js',
    'vendor': './src/vendor.js',
    'polyfills': './src/polyfills.js'
  },

  resolve: {
    extensions: ['.js', '.css'],
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
