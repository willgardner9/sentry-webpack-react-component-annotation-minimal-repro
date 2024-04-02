const HtmlWebpackPlugin = require('html-webpack-plugin')
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin')

module.exports = {
    mode: "production",
    resolve: {
        extensions: ['.tsx'],
    },
    cache: true,
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/template.html',
            filename: './index.html',
            inject: 'body',
        }),
        sentryWebpackPlugin({
            include: './dist',
            ignore: ['node_modules', 'webpack.config.js'],
            reactComponentAnnotation: {
                enabled: true
            }
        })
    ],
    devtool: "source-map",
}
