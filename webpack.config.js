var webpack = require("webpack");
var path = require("path");

module.exports =  {
    entry: './lib/index.js',
    output: {
        filename: 'eloquent-sci.js',
        path: './build',
        libraryTarget: 'commonjs2',
        library: 'eloquent-lint-sci'
    },
    module: { 
        loaders: [
            {
                include: [
                    path.resolve(__dirname, "lib")
                ],
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015',  'stage-3']
                }
            }
        ]
    }
}