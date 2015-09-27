var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './test.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: './index!css' }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};
