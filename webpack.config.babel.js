/* @flow */
import webpack from 'webpack'
import path from 'path'

const config = {
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          'scss': 'vue-style-loader!css-loader!sass-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
export default config
