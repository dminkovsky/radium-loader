import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: ['./tests/test.js'],
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css?$/, exclude: /node_modules/, loader: 'radium!css' }
    ]
  },
  resolveLoader: {
    alias: {
      radium: require.resolve('./lib')
    }
  },
  output: {
    path: 'tests',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}
