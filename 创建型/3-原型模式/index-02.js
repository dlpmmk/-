/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-11 10:44:42
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-11 10:45:44
 * @FilePath: /设计模式/创建型/3-原型模式/demo-02.js
 * @Description: Object 模式 
 */

/* 使用 Object.create() 方法来利用对象原型 */
var FieldObject = {
    type: "",
    displayText: "",

    getElement: function () {
        var field = document.createElement("input");
        field.setAttribute("type", "text");
        field.setAttribute("placeholder", this.displayText);
        return field;
    }
}

/* 以 FieldObject 对象作为基础对象，使用 Object.create() 来创建出自己的对象 */
var textFieldObject = Object.create(FieldObject, {
    "type": {
        value: "text",
        enumerable: true
    },
    "displayText": {
        value: "请输入你的地址",
        enumerable: true
    }
})
var emailFieldObject = Object.create(FieldObject, {
    "type": {
        value: "email",
        enumerable: true
    },
    "displayText": {
        value: "请输入你的邮箱",
        enumerable: true
    }
})

window.addEventListener("load", () => {
    var bodyElement = document.body;
    bodyElement.appendChild(emailFieldObject.getElement());
    bodyElement.appendChild(emailFieldObject.getElement());
}, false)