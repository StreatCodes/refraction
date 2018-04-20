// dependencies
const fs = require("fs");
const postcss = require("postcss");
const atImport = require("postcss-import");
const autoprefixer = require('autoprefixer');
const variables = require('postcss-css-variables');
const nanocss = require('cssnano');
const prod = process.env.NODE_ENV === 'production';

// css to be processed
const css = fs.readFileSync("src/main.css", "utf8");

const plugins = [atImport, variables, autoprefixer];
let output = 'dist/bundle.css';

if(prod) {
	plugins.push(nanocss);
	output = 'dist/bundle.min.css';
}

// process css
postcss(plugins)
	.process(css, { from: "src/main.css", to: output})
	.then(result => {
		fs.writeFileSync(output, result.css);
	});