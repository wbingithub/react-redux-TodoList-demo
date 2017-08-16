'use strict';
var path = require('path');
var express = require('express');


var app = express();
var port = 8099;

//如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现
app.use('/static',express.static(path.join(__dirname, '/build')));



// 1. 申明
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);
// 2. Dev部分处理
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath:"/",
    stats: {
        colors: true
    },
    historyApiFallback: true
}))

// 3. Hot部分处理
app.use(webpackHotMiddleware(compiler, {
    // 非必要
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}))


// 定义一个中间件 sendViewMiddleware
function sendViewMiddleware(request, response, next) {

    response.sendView = function(view) {
        return response.sendFile(__dirname + "/build/" + view);
    }
    next();
}
app.use(sendViewMiddleware);


app.get("/",function(request,response){
    response.sendView('index.html');
    // res.sendfile(path.join(__dirname,"build","index.html")) // 设置了中间件 就没有必要写 这么多代码了
})

// 设置服务监听
app.listen(port,"localhost",function(error){
    if(error){
        console.error(error)
    }else{
        console.info("Open up http://localhost:%s/ in your browser",port)
    }
})






