/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-16 10:45:06
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-16 13:56:22
 * @FilePath: /设计模式/src/结构型/1-组合模式/index-one.js
 * @Description: 组合模式，为一个或多个对象创建一个 接口，使使用者不需要知道他们所处理对
 * 象的个数。当你希望能够简化其他开发者对你的函数访问时，该模式很有帮助。无论其他开发者向函数
 * 传入的是一个单独的对象还是一个对象数组，都不需要区别对待。
 */

/* 下面是一个简单的示例, 函数调用者无需担心传入的 DOM 节点个数，都可以为传入的 DOM 节点添加指定的 class 类名 */

// 该示例我们采用了单例模式创建一个所有方法的对象。
var elements = {

    /**
     * @description: 根据传入的 tag 名称获取页面中的 DOM 元素，如果只有一个节点只返回一个
     * 单独的节点，如果有多个元素，则返回这些元素组成的数组
     * @param {keyof HTMLElementTagNameMap} tagname
     * @return {Array<HTMLElement>}
     */
    get: function (tagname) {
        var elems = document.getElementsByTagName(tagname),
            elemsIndex = 0,
            elemsLength = elems.length,
            output = [];
        // 把找到的元素结构转化为一个标准的数组
        for (; elemsIndex < elemsLength; elemsIndex++) {
            output.push(elems[elemsIndex])
        }

        // 如果只找到一个元素，那么返回该独立元素，如果多个元素，返回元素数组
        return elemsLength === 0 ? output[0] : output
    },

    /**
     * @description: 给传入的元素，添加新的 css 类名
     * @param {Array<HTMLElement>|HTMLElement} elems
     * @param {string} newClassName
     * @return {*}
     */
    addClass: function (elems, newClassName) {
        // 这里进行 一个或者多个 dom 节点处理
        if (Object.prototype.toString.call(elems).slice(-6, -1) === 'Array') {
            elems.forEach((row) => {
                row.className += (row.className === "" ? "" : " ") + newClassName
            })
        } else {
            elems.className += (elems.className === "" ? "" : " ") + newClassName
        }

    }
}

