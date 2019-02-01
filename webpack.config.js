'use-strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new HtmlWebpackPlugin({
            template: __dirname + '/src/public/index.html',
            filename: 'index.html',
            meta: {
                'google-signin-scope': 'https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly',
                'google-signin-client_id': process.env.GOOGLE_SIGNIN_CLIENT_ID + '.apps.googleusercontent.com'
            }
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/src/public/fonts',
                to: 'fonts'
            },
            {
                from: __dirname + '/src/public/images',
                to: 'images'
            },
            {
                from: __dirname + '/src/public/scripts',
                to: 'scripts'
            }
        ])
    ],
    devtool : 'source-map',
    devServer: {
        contentBase: __dirname + '/src/public',
        stats: 'minimal'
    }
};
