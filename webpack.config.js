module.exports = {
  context: __dirname + '/src/app',
  entry: './app.js',
  output: {
    path: __dirname + '/src/dist',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  devServer: {
    contentBase: __dirname + '/src/public',
    stats: 'minimal'
  }
};
