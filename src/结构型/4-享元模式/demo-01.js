/*
 * @Author: dlpmmk 513393989@qq.com
 * @Date: 2023-02-15 06:49:31
 * @LastEditors: dlpmmk 513393989@qq.com
 * @LastEditTime: 2023-02-15 07:09:15
 * @FilePath: /设计模式/src/结构型/4-享元模式/demo-01.js
 * @Description: 享元模式是一种关于代码优化的模式，对于一些需要创建大量相似对象
 * 从而消耗更多内存的代码，用户享元模式来优化是一种不错的选择。
 * 它可以用少量的可共享的对象来代替这些大量相似的对象，使代码的运行占用更少并更为高效
 * 
 */

// 创建一个类来保存员工数据， 这些员工工作于一个或者多个不同的公司
function Employee(data) {

    // 表示组织内员工的 ID
    this.employeeId = data.employeeId || 0;

    // 表示员工的社会安全码
    this.ssId = data.ssId || "0000-000-0000";

    // 表示员工的名称
    this.name = data.name || "";

    // 表示员工的职业
    this.occupation = data.occupation || "";

    // 表示员工的公司名称、地址、国籍
    this.companyName = data.companyName || "";
    this.companyAddress = data.companyAddress || "";
    this.companyCountry = data.companyCountry || "";

}

// 建立三个方法， 用于从保存的数据对象中获取员工的名称、职业、公司的详细信息
Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getOccupation = function () {
    return this.occupation;
}

Employee.prototype.getCompany = function () {
    return [this.companyName, this.companyAddress, this.companyCountry];
}
