/**
 * @description: 工厂函数，生产带有文字的 HTMLelement 元素 
 * @return
 */
var FormFieldFactory = {
    /**
     * @description: 工厂主函数，主要生产 text, email 类型的表单框，button 按钮
     * @param options 函数创建时的传入对象
     * @param options.type 表单类型
     * @param options.displayText 表单提示文本 
     * @return 创建好的对象
     */
    makeField: function (options) {
        var options = options || {},
            type = options.type || "text",
            displayText = options.displayText || "",
            field;
        // 根据选项使用合适的类创建对象
        switch (type) {
            case "text":
                field = new TextField(displayText);
                break;
            case "email":
                field = new EmailField(displayText);
                break;
            case "button":
                field = new ButtonField(displayText);
                break;
            default:
                field = new ButtonField(displayText);
                break;
        }
        return field;
    }
};

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