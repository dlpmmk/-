/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-17 09:29:55
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-17 12:05:07
 * @FilePath: /设计模式/src/结构型/2-装饰器模式/index-two.js
 * @Description: 测试
 */

// 定义一个类，用于构建一个对象，表示简单的表单域
class FormField {

    /**
     * @description: 类的构造方法
     * @param {"text"|"email"|"search"} type
     * @param {*} displayText
     * @return {*}
     */
    constructor(type, displayText) {
        this.type = type
        this.displayText = displayText
    }

    createElement() {
        this.element = document.createElement("input")
        this.element.setAttribute("type", this.type)
        this.element.setAttribute("placeholder", this.displayText)
        return this.element
    }

    isValid() {
        return this.element.value !== ""
    }
}

// 表单域装饰者，它实现了和 FormField 相同的公共方法
var FormFieldDecorator = function () { }

FormFieldDecorator.prototype = {
    formField: null,
    createElement: function () {
        return this.fromField.createElement()
    },

    isValid: function () {
        return this.fromField.isValid()
    }

}

var formFieldDecorator = new FormFieldDecorator()

var MaxLengthFieldDecorator = function (formField, maxlength) {
    formFieldDecorator.fromField = formField
    this.maxlength = maxlength | 100
    this.lengthAdd = function () {
        var element = this.createElement();
        element.setAttribute("maxlength", this.maxlength)
        return element
    }
}
MaxLengthFieldDecorator.prototype = formFieldDecorator


// var AutoCompleteFieldDecorator = function (formField, autocomplete) {
//     formFieldDecorator.fromField = formField
//     this.autocomplete = autocomplete
// }

// AutoCompleteFieldDecorator.prototype = formFieldDecorator
// AutoCompleteFieldDecorator.prototype.createElement = function () {
//     var element = formFieldDecorator.createElement();
//     element.setAttribute("autocomplete", this.autocomplete)
//     return element
// }


var form = document.createElement("form"),
    formField = new FormField("search", "搜索")

// 使用装饰器，为新创建的表单对象添加 maxlength 和 autocomplete 属性，实现对 formField
// 对象的拓展
formField = new MaxLengthFieldDecorator(formField, 255)
// TODO 这里的 formFiled = formField 整个对象，如果再使用 this.formField = formField,
// TODO 就多套了一层，所以这里要进行处理
// formField = new AutoCompleteFieldDecorator(formField, "off")

// 创建该表单元素，并将其添加至表单 form 中
form.appendChild(formField.lengthAdd())


window.addEventListener("load", () => {
    document.body.appendChild(form)
})