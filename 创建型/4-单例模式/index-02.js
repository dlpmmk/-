/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-12 10:05:30
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-12 10:58:19
 * @FilePath: /设计模式/创建型/4-单例模式/index-02.js
 * @Description:  使用自执行函数的单例模式, 定义一个单例，当中包含着与 Cookie 
 * 操作相关的方法。初始化代码是通过使用自执行函数闭包实现的，这使得在创建单例模式时所
 * 使用的代码不是公共的，不会被应用程序的其他部分访问，实现了数据的私有性
 */

var cookie = (() => {

    // cookie 保存在 document.cookie 字符串中，由分号（;） 进行分割
    var allCookies = document.cookie.split(";"),
        cookies = {},
        cookiesIndex = 0,
        cookiesLength = allCookies.length,
        cookie;

    //遍历所有的 cookie , 把它们添加到 cookies 对象中， 使用 cookie 的名称作为属性名称
    for (; cookiesIndex < cookiesLength; cookiesIndex++) {
        cookie = allCookies[cookiesIndex].split("=");

        cookies[decodeURI(cookie[0])] = decodeURI(cookie[1])
    }

    // 返回指定的方法
    return {
        /**
         * @description:  根据 cookie 名获取其值
         * @param {*} name
         * @return {*}
         */
        get: function (name) {
            return cookies[name] || "";
        },
        /**
         * @description: 根据传入参数向 cookie 中设置值
         * @param {*} name
         * @param {*} value
         * @return {*}
         */
        set: function (name, value) {
            cookies[name] = value;
            document.cookie = encodeURI(name) + "=" + encodeURI(value);
        }
    }
})();

// 使用 cookie 单例所暴露的 set 方法设置一个 cookie
cookie.set("name", "中国")
// 使用 cookie 单例所暴露的 get 方法得到一个 cookie
var res = cookie.get("name")
console.log(res);

