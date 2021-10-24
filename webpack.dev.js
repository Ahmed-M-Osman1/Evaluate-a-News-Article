const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkPluginBox = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
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

                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkPluginBox.GenerateSW(),
    ],
        output: {
            libraryTarget: 'var',
            library: 'Client',
          },
        
}
