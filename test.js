// Loader for `/\.css$/` files configured in  webpack.config.js 
var radiumObject = require('./test.css');

function assertIsObject(obj) {
    if (typeof obj !== 'object') { throw new Error('Expected object'); }
}

assertIsObject(radiumObject);
