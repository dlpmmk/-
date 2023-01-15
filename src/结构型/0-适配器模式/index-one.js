/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-15 10:38:49
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-15 16:13:03
 * @FilePath: /设计模式/结构型/0-适配器模式/index.js
 * @Description: 初始接口, 在 index-two 中进行适配 
 */

// 假设以下接口隐藏在你庞大的代码库中，用于通过 http 发送 ajax 请求
var http = {
    /**
     * @description: 创建 httpRequest 请求链接
     * @param {"GET"|"PUT"|"DELETE"|"POST"} type
     * @param {URL} url
     * @param {*} callback
     * @param {any} data
     * @return {*}
     */
    makeRequest: function (type, url, callback, data) {
        var xhr = new XMLHttpRequest(),
            STATE_LOADED = 4,
            STATUS_OK = 200

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== STATE_LOADED)
                return
            if (xhr.status === STATUS_OK)
                callback(xhr.responseText)
        }
        xhr.open(type.toUpperCase(), url, true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(data))
    }
}

// 上面定义的 http.makeRequest 方法可以按以下方法进行调用
// 获取
http.makeRequest("GET", "/user/12345", (response) => {
    console.log("TTTP GET response received user data is: " + response)
})

// 更新
http.makeRequest("POST", "/user/12345", (response) => {
    console.log("TTTP GET response received , new user data is: " + response)
}, {name:"张三"})


