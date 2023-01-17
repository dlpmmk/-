/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-01-17 09:29:55
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-01-17 10:54:02
 * @FilePath: /设计模式/src/结构型/2-装饰器模式/index-one.js
 * @Description: 装饰器模式，通过一些装饰器对象，对现有的对象进行装饰，避免过多的子类而使
 * 创建被装饰对象的类难以维护
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
class FormFieldDecorator {
    constructor(formField) {
        this.fromField = formField
    }

    createElement() {
        return this.fromField.createElement()
    }

    isValid() {
        return this.fromField.isValid()
    }
}

class MaxLengthFieldDecorator extends FormFieldDecorator {
    /**
     * @description: 
     * @param {new FormField} formField
     * @param {number} maxlength
     * @return {*}
     */
    constructor(formField, maxlength) {
        super(formField)
        this.maxlength = maxlength | 100
    }

    createElement() {
        var element = super.createElement();
        element.setAttribute("maxlength", this.maxlength)
        return element
    }
}

class AutoCompleteFieldDecorator extends FormFieldDecorator {
    constructor(formField, autocomplete) {
        super(formField)
        this.autocomplete = autocomplete
    }

    createElement() {
        var element = super.createElement();
        element.setAttribute("autocomplete", this.autocomplete)
        return element
    }
}


var form = document.createElement("form"),
    formField = new FormField("search", "搜索")

// 使用装饰器，为新创建的表单对象添加 maxlength 和 autocomplete 属性，实现对 formField
// 对象的拓展
formField = new MaxLengthFieldDecorator(formField, 255)
formField = new AutoCompleteFieldDecorator(formField, "off")

// 创建该表单元素，并将其添加至表单 form 中
form.appendChild(formField.createElement())


window.addEventListener("load", () => {
    document.body.appendChild(form)
})