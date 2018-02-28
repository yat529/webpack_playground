const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: __dirname,
            }
        ),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Test Title',
            template: './index.html',
        })
    ]
}
