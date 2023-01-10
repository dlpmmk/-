/* 定义一个基础工厂 “类” ,用于创建表单域，在此类的基础上创建更加明确的表单域类型 */
function FormFieldFactory() {

    // 类型清单
    this.availableTypes = {
        TEXT: "text",
        EMAIL: "email",
        BUTTON: "button",
    }
}

FormFieldFactory.prototype = {
    // 该方法是基础工厂的基类，用来重写
    makeField: function () {
        throw new Error("该方法不应该被调用")
    }
}

function Html5FiledFactory() { }
Html5FiledFactory.prototype = new FormFieldFactory();

Html5FiledFactory.prototype.makeField = function (options) {
    var options = options || {},
        type = options.type || this.availableTypes.TEXT,
        displayText = options.displayText || "",
        field;
    // 根据选项使用合适的类创建对象
    switch (type) {
        case this.availableTypes.TEXT:
            field = new TextField(displayText);
            break;
        case this.availableTypes.EMAIL:
            field = new EmailField(displayText);
            break;
        case this.availableTypes.BUTTON:
            field = new ButtonField(displayText);
            break;
        default:
            throw new Error("无效的表单类型" + type)
    }
    return field;
}

/**
 * @description: input 类型表单创建类
 * @return {*}
 */
class TextField {
    constructor(displayText) {
        this.displayText = displayText;
    }
    getElement() {
        var textField = document.createElement("input");
        textField.setAttribute("type", "text");
        textField.setAttribute("placeholder", this.displayText);
        return textField;
    }
}


/**
 * @description: email 类型创建类, 创建 email 类型表单 html 元素 
 * @param {*} displayText 表单提示文本
 * @return {*}
 */
function EmailField(displayText) {
    this.displayText = displayText
}

EmailField.prototype.getElement = function () {
    var emailField = document.createElement("input");
    emailField.setAttribute("type", "email");
    emailField.setAttribute("placeholder", this.displayText);
    return emailField;
}

/**
 * @description: 创建 button 类型的 html 元素 
 * @param {*} displayText button 上的文字
 * @return {*}
 */
function ButtonField(displayText) {
    this.displayText = displayText
}

ButtonField.prototype.getElement = function () {
    var buttonField = document.createElement("button");
    buttonField.setAttribute("type", "submit");
    buttonField.innerHTML = this.displayText;
    return buttonField;
}
