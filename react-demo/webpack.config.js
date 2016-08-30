module.exports = {
  entry: 'main.js',
  output: {
    path: '/',
    filename: 'index.js'
  },
  devServer: {
    port: 3000,
    inline: true
  },
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}
