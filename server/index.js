const express = require('express')
const rootpath = require("app-root-path")
const app = express()
app.use(express.json({ type: 'application/json' }))

// 这里把主 index.html 也放在 public 路由下，可以通过 /public/index.html 访问
// 同时里面的资源文件采用的是相对路径，方便调用 
const publicPath = rootpath.path + "/src"
console.log(publicPath);
app.use('/public', express.static(publicPath))

app.get(/^\/user\/\d+/, function (req, res) {
    // console.log(req.body);
    res.send("hello");
})

app.post(/^\/user\/\d+/, function (req, res) {
    console.log(req.url + ":", req.body);
    res.send(req.body)
})





var server = app.listen(5000, () => {
    var port = server.address().port
    console.log(`应用示例，访问地址为：http://localhost:${port}`);
})