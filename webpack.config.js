const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
	  radiosavtaPlayer: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
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
	  
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
	port: 3000,
	open: true,
	injectClient: false
  }
};