/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-11 09:16:59
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-11 11:47:37
 * @FilePath: /设计模式/创建型/3-原型模式/index.js
 * @Description: 原型模式，在 ES5 中原型模式可以通过两种方式实现，第一种是利用已经
 * 存在的对象的原型 prototype 属性来绑定方法。
 * 第二种是利用官方的 Object.create() 方法来创创建对象。 
 */

/* Prototype 方法 */
var textField,
    emailField

/**
 * @description: 
 * @param {"text"|"email"} type
 * @param {string} displayText
 * @return {*}
 */
function Field(type, displayText) {
    this.type = type || "error";
    this.displayText = displayText || "error";
}

/**
 * @description: 向 Field 对象的原型中添加方法
 * @return {*}
 */
Field.prototype = {
    getElement: function () {
        var field = document.createElement("input");
        field.setAttribute("type", this?.type || "demo");
        field.setAttribute("placeholder", this?.displayText || "demo");
        return field;
    }
}

/* 以 Field 对象原型作为基础类，创建出相应的对象 */
textField = new Field("text", "请输入你的地址")
emailField = new Field("email", "请输入你的邮箱")

window.addEventListener("load", function () {
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
}, false)