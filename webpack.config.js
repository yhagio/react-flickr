module.exports = {
  entry: getEntrySources(),
  output: {
    filename: getOutput()
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      }
    ]
  }
};

function getEntrySources() {
  if (process.env.NODE_ENV === 'test') {
    var arr = [
      "./tests/Header.test.js",
      "./tests/Footer.test.js",
      "./tests/Photos.test.js",
      "./tests/SearchBar.test.js"
    ];
    return arr;
  }
  return "./app/App.js";
}

function getOutput() {
  if (process.env.NODE_ENV === 'test') {
    return "tests/spec.js";
  }
  return "public/bundle.js";
}