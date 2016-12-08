module.exports = {
  entry: "App.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      },
      {
        test: /\.(png|jpg|otf|ttf|svg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10"
      }
    ]
  }
};