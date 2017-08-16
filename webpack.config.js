var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');


var config = {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
        __dirname + "/src/index.js"
    ],
    output: {
        path: __dirname + "/build",
        filename: "js/[name]-[hash:8].js",
        // publicPath: '/static/', // 服务器路径
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query:{
                    presets:['es2015','react']
                }
            }
        ],
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: "react-redux TODO",
            filename: 'index.html',
            template: "src/template/index.html",
            favicon:"favicon.ico"
        }),
        new CleanWebpackPlugin(
            ['build'], // 删除的文件夹
            {
                root: __dirname, // 根的绝对路径 // An absolute path for the root.
                verbose: true, // Write logs to console.
                dry: false, // 为true没有删除效果
                exclude: ['test.html',"aa"],//排除的文件或文件夹（包含文件夹类所有内容）
                watch: true // If true, remove files on recompile.
            }
        )
    ],
    devtool: '#source-map',
}

module.exports = config