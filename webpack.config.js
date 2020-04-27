const path                   = require('path');
const nodeExternals          = require('webpack-node-externals');
const NodemonPlugin          = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'node',

    entry: {
        app: path.resolve(process.cwd(), 'src', 'app.js'),
    },

    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'app.js',
    },

    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new NodemonPlugin({
            nodeArgs: '--inspect=0.0.0.0:7777'
        }),
    ],

    devtool: 'inline-source-map'
};
