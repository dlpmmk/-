/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-13 09:42:03
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-13 10:18:23
 * @FilePath: /设计模式/创建型/4-单例模式/index-03.js
 * @Description: 使用单例模式实现命名空间的设置
 */

// 使用对象直接量来创建一个层级化分组的各项属性和方法的结构，称作 “命名空间”
var myProject = {
    data: {
        // 每个嵌套属性表示一个新的、更深层次的命名空间
        ajax: {
            /**
             * @description:  创建一个方法来实现发送 ajax get 请求
             * @param {*} url
             * @param {*} callback
             * @return {*}
             */
            get: function (url, callback) {
                var xhr = new XMLHttpRequest(),
                    STATE_LOADED = 4,
                    STATUS_OK = 200
                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== STATE_LOADED) {
                        return;
                    }
                    if (xhr.status === STATUS_OK) {
                        callback(xhr.responseText)
                    }
                }

                xhr.open("GET", url)
                xhr.send()
            }
        }
    }
}

// 创建完命名空间后，使用点号标记法可以增加命名空间
myProject.data.cookies = {
    /**
     * @description: 创建 一个方法， 用于设置 cookie  
     * @param {string} name
     * @param {string} value
     * @return {boolean}
     */
    set: function (name, value) {
        var encodeName = encodeURI(name)
        var encodeValue = encodeURI(value)
        document.cookie = `${encodeName}=${encodeValue}`
        return true
    },
    /**
     * @description:  创建一个方法， 用于通过 cookie 的名称读取 cookie 的值
     * @param {string} name
     * @return {string}
     */
    get: function (name) {
        var output,
            cookiemap = new Map(),
            cookies = document.cookie.split(";")
        cookies.forEach((row) => {
            var singleCookie = row.split("=");
            cookiemap.set(singleCookie[0].trim(), singleCookie[1].trim())
        })
        output = cookiemap.get(encodeURI(name))
        return decodeURI(output)
    }
}

// 使用点号标记法， 通过 “命名空间” 来直接执行方法
myProject.data.ajax.get("/user/12345", (response) => {
    console.log("HTTP GET response received, User data :", response);
})

myProject.data.cookies.set("name", "张三")
myProject.data.cookies.set("age", "19")

console.log(myProject.data.cookies.get("age"))
console.log(myProject.data.cookies.get("name"))

