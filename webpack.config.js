const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		common: './src/scss/common.scss', 
		//main: './src/js/main.js',
		colorsType: './src/pages/colors-type/colors-and-fonts.js',
		headersFooters: './src/pages/headers-footers/headers-footers.js',
		landing: './src/pages/landing/landing.js',
		cards: './src/pages/cards/cards.js',
		formElements: './src/pages/form-elements/form-elements.js',
		registration: './src/pages/registration/registration.js',
		landingLayout: './src/pages/landing-layout/landing-layout.js'
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
				test: /\.s?css$/,
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
			chunks: ['common']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/colors-and-fonts.html',
			template: './src/pages/colors-type/colors-and-fonts.pug',
			chunks: ['common', 'colorsType']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/headers-footers.html',
			template: './src/pages/headers-footers/headers-footers.pug',
			chunks: ['common', 'headersFooters']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/landing.html',
			template: './src/pages/landing/landing.pug',
			chunks: ['common', 'landing', 'landingLayout']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/cards.html',
			template: './src/pages/cards/cards.pug',
			chunks: ['common', 'cards']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/form-elements.html',
			template: './src/pages/form-elements/form-elements.pug',
			chunks: ['common', 'formElements']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/registration.html',
			template: './src/pages/registration/registration.pug',
			chunks: ['common', 'registration', 'landingLayout']
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