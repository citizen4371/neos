require('dotenv').config();
const path = require('path');
const env = process.env.ENV || 'dev';
const webpack = require('webpack');

const devPlugins = [];
const prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
      state: path.resolve(__dirname, 'src/state')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread'] },
        }]
      }
    ]
  },
  plugins: env === 'dev' ? devPlugins : prodPlugins
};