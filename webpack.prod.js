const path                   = require('path');
const nodeExternals          = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

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
        new CleanWebpackPlugin()
        ]
};
