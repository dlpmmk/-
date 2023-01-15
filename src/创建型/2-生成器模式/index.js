/* ES5 */

// 生成器模式
function FormBuilder() { }
FormBuilder.prototype = {
    // 保存创建的表单域元素列表
    fields: [],

    /**
     * @description: 向表单域列表中添加表单实例
     * @param {"text"| "email"| "button"} type 表单类型
     * @param {string} displayText 提示元素
     * @return {*}
     */
    addField: function (type, displayText) {
        var field;
        // 利用表单类型属性和展示类型属性
        switch (type) {
            case "text":
                field = new TextField(displayText)
                break;
            case "email":
                field = new EmailField(displayText)
                break;
            case "button":
                field = new ButtonField(displayText)
                break;
            default:
                throw new Error("错误的表单类型：" + type)
        }

        // 把创建的表单对象存储在表单域元素列表中
        this.fields.push(field)
    },

    /**
     * @description: 把 form 表单域列表中的表单元素添加到一个 form DOM 中
     * @return {HTMLFormElement}
     */
    getForm: function () {
        var form = document.createElement("form");
        this.fields.forEach((row) => {
            form.appendChild(row.getElement());

        })
        return form;
    }
};

/**
 * @description: text 类型的表单元素生成类
 * @return {*}
 */
class TextField {
    constructor(displayText) {
        this.displayText = displayText || "";
    }

    /**
     * @description: 根据构造信息，创建一个 input 类型的 HTML 元素  
     * @return {HTMLInputElement}
     */
    getElement() {
        var textField = document.createElement("input")
        textField.setAttribute("type", "text")
        textField.setAttribute("placeholder", this.displayText)
        return textField;
    }
}

/**
 * @description: email 类型的表单元素生成类
 * @return {*}
 */
class EmailField {
    constructor(displayText) {
        this.displayText = displayText || "";
    }

    /**
     * @description: 根据构造信息，创建一个 email 类型的 HTML 元素  
     * @return {HTMLInputElement}
     */
    getElement() {
        var emailField = document.createElement("input")
        emailField.setAttribute("type", "email")
        emailField.setAttribute("placeholder", this.displayText)
        return emailField;
    }
}

/**
 * @description: button 类型的表单元素生成类
 * @return {*}
 */
class ButtonField {
    constructor(displayText) {
        this.displayText = displayText || "";
    }

    /**
     * @description: 根据构造信息，创建一个 button 类型的 HTML 元素  
     * @return {HTMLButtonElement}
     */
    getElement() {
        var buttonField = document.createElement("button")
        buttonField.setAttribute("type", "submit")
        buttonField.innerHTML = this.displayText
        return buttonField;
    }
}

/* 使用 */
var formBuider = new FormBuilder(),
    form;

formBuider.addField("text", "点击输入你的信息")
formBuider.addField("email", "点击输入你的邮箱")
formBuider.addField("button", "提交")


form = formBuider.getForm();

window.addEventListener("load", () => {
    document.body.appendChild(form)
}, false);