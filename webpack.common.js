const path = require('path');

const package = require('./package.json');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        vendor: Object.keys(package.dependencies)
    },
    output: {
        filename: './[name].bundle.js'
    },
    resolve: { extensions: ['.js', '.ts'] },
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: __dirname + '/postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.handlebars$/, loader: 'handlebars-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        }),
        new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        })
    ]
};
