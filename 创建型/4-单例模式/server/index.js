const express = require('express')
const rootpath = require("app-root-path")
const app = express()

// 这里把主 index.html 也放在 public 路由下，可以通过 /public/index.html 访问
// 同时里面的资源文件采用的是相对路径，方便调用 
app.use('/public', express.static(rootpath.path + "/创建型/4-单例模式/"))

app.get('/user/[12345]{5}', function (req, res) {
    res.send("hello");
})



var server = app.listen(5000, () => {
    var port = server.address().port
    console.log(`应用示例，访问地址为：http://localhost:${port}`);
})