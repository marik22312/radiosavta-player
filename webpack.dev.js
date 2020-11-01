const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
	port: 3000,
	open: true,
	injectClient: false
  },
  plugins: [
	new HtmlWebpackPlugin({
		title: "Radiosavta Player tester",
		minify: false,
		templateContent: `<html><body><div id="Radio-savta"></div></body></html>`
		
	}),

  ]
});