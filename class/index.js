//属性 / 方法
// class Person {
//     //类的成员属性 public private protected
//     name: string;
//     age: number;
//     interestes: string[];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(){
//     }
//     //类的实例方法
//     say(): void {
//         alert(this.name + ": say hello class!")
//     }
// }
// //类的继承
// class son extends Person {
//     sonName: string;
//     say(): void {
//         alert(this.sonName)
//     }
// } 
// // let people = new Person();
// // people.name = "mumu";
// // people.age = 12;
// // people.interestes = ["a", "b", "c"];
// // people.say();
// let s = new son();
// s.name = "zhangsan"
// s.age = 15;
// s.interestes = ["a","b","c"];
// s.sonName = "aaaaa";
// s.say();
//复习
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + "" + this.age;
    };
    return Person;
}());
var p = new Person("mumu", 10);
console.log(p.print());
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.tell = function () {
        return this.name + ":" + this.age;
    };
    return Person1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(school) {
        var _this = _super.call(this, "mumu", 18) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Student;
}(Person1));
var s = new Student("LOL");
// s.name = "mumu";
// s.age = 18;
// s.school = "lol";
console.log(s.tell());
