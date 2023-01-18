/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-18 11:47:24
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-18 12:11:22
 * @FilePath: /设计模式/src/结构型/3-外观模式/index-one.js
 * @Description: 外观模式，通过编写一个单独的函数，来简化一个或者多个更大型、更复杂的函数
 * 的访问。
 */

/* 下面展示一个简单的外观模式，该模式用包裹器简化了跨浏览器的 ajax 调用 */
/* 掩盖了跨浏览器的 Ajax 操作的复杂性 */
function ajaxCall(type, url, callback, data) {
    var xhr = (() => {
        try {
            return new XMLHttpRequest()
        } catch (error) { }
        try {
            // 比较老版本的IE浏览器使用用户机器上安装的一个 ActiveX 对象
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (error) { }
        try {
            // 比较老版本的IE浏览器使用用户机器上安装的一个 ActiveX 对象
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (error) { }
        try {
            // 比较老版本的IE浏览器使用用户机器上安装的一个 ActiveX 对象
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (error) { }
        throw new Error("Ajax 不被支持，在该浏览器上")
    })(),
        STATE_DONE = 4,
        STATUS_OK = 200
    xhr.onreadystatechange = () => {
        if (xhr.readyState != STATE_DONE)
            return;
        if (xhr.status === STATUS_OK) {
            callback(xhr.responseText)
        }
    }

    xhr.open(type, url)
    if (data) {
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(data))
    } else {
        xhr.send()
    }
}

// 使用
ajaxCall("GET", "/user/12345", (response) => {
    console.log("GET 方法得到的数据:" + response);
})
ajaxCall("POST", "/user/12345", (response) => {
    console.log("POST 方法发送的数据, 并且返回:" + response);
}, { name: "张三" })
