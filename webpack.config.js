const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: {
	  radiosavtaPlayer: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
	  },
	  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  externals: {
	  React: "React"
  },
  output: {
    filename: 'radiosavtaPlayer.js',
	path: path.resolve(__dirname, 'dist'),
	library: "RadiosavtaPlayer",
	libraryTarget: "umd",
  },
  plugins: [new HtmlWebpackPlugin({
	  title: "Radiosavta Player tester",
	  minify: false,
	  templateContent: `<html><body><div id="Radio-savta"></div></body></html>`
	  
  }),
	 new Dotenv()
],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
	port: 3000,
	open: true,
	injectClient: false
  },
  devtool: 'eval-source-map'
};