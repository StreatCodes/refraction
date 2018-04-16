const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
						  modules: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
							],
							sourceMap: true
						}
					},
				]
			}
		]
	},
	devServer: {
		port: 9000,
		host: "0.0.0.0",
		watchContentBase: true
	}
};