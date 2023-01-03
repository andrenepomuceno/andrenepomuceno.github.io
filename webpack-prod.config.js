const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    return {
        entry: './src/js/main.js',
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
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: () => [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
    }
};