var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080', //资源服务器地址
    'webpack/hot/only-dev-server',
    __dirname + '/app/client/entry.ts'
  ],
  output: {
    publicPath: '/app/',
    path:'./build/',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //   },
    // }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ],
  module: {
    loaders: [{
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {test: /\.html$/,loader: 'html'},
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
      //{ test: /\.jade$/,  loader: "jade-html" }
    ]
  }
};
