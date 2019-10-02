const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		style: './src/scss/style.scss', 
		main: './src/js/main.js'
	},

	output: {
		path: path.resolve(__dirname, 'build')
	},

	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.scss$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader?url=false',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.pug',
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/colors-and-fonts.html',
			template: './src/pages/colors-and-fonts.pug'
		}),
		
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css'
		}),

		new CopyWebpackPlugin([
			{
				from: './src/img',
				to: './img'
			},
			{
				from: './src/fonts',
				to: './fonts'
			}
		]),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
	],

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		overlay: true,
	},

};