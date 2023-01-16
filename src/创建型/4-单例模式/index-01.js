/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-12 09:48:31
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-16 10:43:28
 * @FilePath: /设计模式/src/创建型/4-单例模式/index-01.js
 * @Description:单例模式，顾名思义只有一个实例的对象， 
 */


// 把相关的属性和方法聚集在一个单独的对象直接量内，我们称之为单例
var element = {
    // 创建一个数值，用于存储各个页面元素的引用
    allElement: [],

    /**
     * @description: 通过元素的 id 获取对该元素的引用并保存它
     * @param {string} id
     * @return {HTMLElement}
     */
    get: function (id) {
        var elem = document.getElementById(id)
        this.allElement.push(elem)
        return elem;
    },

    /**
     * @description: 根据给定的类型创建一个新元素，并保存它
     * @param {keyof HTMLElementTagNameMap} type
     * @return {HTMLElement}
     */
    create: function (type) {
        var elem = document.createElement(type)
        this.allElement.push(elem)
        return elem
    },

    /**
     * @description: 获取所有保存的元素
     * @return {HTMLElement[]}
     */
    getAllElements: function () {
        return this.allElement
    }
},

// 获得 id 为 header 的页面元素，并把它保存
header = element.get(header),

// 创建一个 input 类型的 HTML 元素，并保存它
input = element.create("input") 

// 这里包含这 id = header 和 input 的页面元素
allElements = element.getAllElements();

// 检查元素的个数
console.log(allElements.length);


