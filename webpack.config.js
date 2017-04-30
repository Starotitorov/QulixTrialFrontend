'use-strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + '/src/app',
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader!css-loader')
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public'
        }])
    ],
    devtool : 'source-map',
    devServer: {
        contentBase: __dirname + '/src/public',
        stats: 'minimal'
    }
};
