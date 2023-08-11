const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vittapada_janayitr.min.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'vittapada_janayitr',
    },
    mode: 'production',
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CompressionPlugin(),
    ],
    resolve: {
        extensions: ['.js'],
        modules: ['lib', 'node_modules'],
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            buffer: require.resolve('buffer/'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};