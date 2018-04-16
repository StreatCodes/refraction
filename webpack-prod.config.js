const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer'),
								require('cssnano'),
							],
							sourceMap: true
						}
					},
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
};