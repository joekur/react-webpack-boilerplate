var webpackServer = 'http://localhost:8080';

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?' + webpackServer,
      'webpack/hot/only-dev-server',
      './js/index.js',
    ]
  },
  output: {
    publicPath: webpackServer,
    filename: 'public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
