const path = require(`path`);
const pathToPublic = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: pathToPublic
  },
  devServer: {
    contentBase: pathToPublic,
    open: false,
    inline: true,
    // port: 8080
  },
  resolve: {
    alias: {
      components: path.join(__dirname, `src/components`)
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      }
    ]
  },
  devtool: `source-map`
};
