const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,

  plugins: [new MiniCssExtractPlugin()],

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_mudules/,
        use: {
          // Without additional settings this will reference .babelrc
          loader: 'babel-loader',
        },
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
          'sass-loader',
        ],
      },
    ],
  },

  module: {
    rules: [
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  devtool: 'source-map',
};
