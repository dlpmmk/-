/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-16 09:42:40
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-16 10:25:31
 * @FilePath: /设计模式/src/结构型/0-适配器模式/index-two.js
 * @Description: 对 index-one.js 代码进行重构，并且保证调用代码能按照原来的方调用
 */

var myProject = {
    data: {
        ajax: (() => {
            function createRequest(callback) {
                var xhr = new XMLHttpRequest(),
                    STATUS_OK = 200,
                    STATE_DONE = 4;
                xhr.onreadystatechange = () => {
                    if (xhr.readyState !== STATE_DONE)
                        return;
                    if (xhr.status === STATUS_OK) {
                        callback(xhr.responseText)
                    }
                }
                return xhr
            }
            return {
                get: function (url, callback) {
                    var requestObj = createRequest(callback)
                    requestObj.open("GET", url)
                    requestObj.send()
                },
                post: function (url, callback, data) {
                    var requestObj = createRequest(callback)
                    requestObj.open("POST", url)
                    requestObj.setRequestHeader("Content-Type", "application/json")
                    requestObj.send(JSON.stringify(data))
                }
            }
        })()
    }
}

// 为了不更改 index-one.js 中代码库的调用方法，可以通过创建一个适配器来映射旧的接口至该新接口
/**
 * @description: 适配器接口
 * @param {"GET"|"POST"} type
 * @param {string} url
 * @param {(string):void} callback
 * @param {object} data
 * @return {*}
 */
function httpToAjaxAdpter(type, url, callback, data) {
    if (type.toUpperCase() === 'GET') {
        myProject.data.ajax.get(url, callback)
    }
    if (type.toUpperCase() === 'POST') {
        myProject.data.ajax.post(url, callback, data)
    }
}

// 使用适配器创建旧的适配接口
var http = new Object()
http.makeRequest = httpToAjaxAdpter

