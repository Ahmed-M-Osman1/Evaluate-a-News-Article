const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtPlugin = require('mini-css-extract-plugin')
const WorkPluginBox = require('workbox-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                //babel loader.
                test: '/.js$/',
                
                exclude: /node_modules/,

                loader: 'babel-loader',
              },
              {
                  //style loader.
                test: /\.scss$/,

                use: [MiniCssExtPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtPlugin({ filename: '[name].[contenthash].css' }),
        new WorkPluginBox.GenerateSW(),

    ],
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },

        output: {
            libraryTarget: 'var',
            library: 'Client',
          },

    }
