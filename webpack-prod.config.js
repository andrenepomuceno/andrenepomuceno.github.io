const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        entry: './src/main.js',
        mode: 'production',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(env)
            }),
        ],
    }
};