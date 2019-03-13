const path = require('path');
console.log(__dirname)
module.exports = {
	mode:'production',
	entry:'./index.js',
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	}
}