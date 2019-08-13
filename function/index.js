//有名函数 ， 匿名函数
// function test() {
// }
// var test2 = function () {
// }
function test(n) {
    return 10;
}
//参数可选性 
function test2(n, age) {
    return "昵称:" + n + ",年龄:" + age;
}
function test3(n, age) {
    if (age === void 0) { age = 19; }
    return age;
}
//匿名函数的函数声明
var test4 = function (n, age) {
    return 100;
};
// alert(test("1"));
// alert(test2("mumu", 12));
// alert(test3("mumu", 45));
// alert(test4("mumu", 45));
//可变参数
//可变参数的格式： ...参数名称: 类型[]
function test5(n) {
    var parmas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parmas[_i - 1] = arguments[_i];
    }
    return parmas.join("-");
}
alert(test5("mumu", "is", 125, "asdf"));
//函数的重载
function test6(c) {
    if (c && typeof c === "string") {
        alert("string");
    }
    else {
        alert("number");
    }
}
test6(1);
//复习
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAddTs = function (n, a) {
    return a;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName("a", "b");
var result2 = buildName("a");
// var result3 = buildName("a","b","c");
var result4 = buildName();
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "b"; }
    return firstName + "" + lastName;
}
var result5 = buildName1("a");
var result6 = buildName1("a", "c");
// var result7 = buildName1("a","c","d");
//可变参数  ...restOfName:string[]
function propleName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfName.join("");
}
var pn = propleName("a", "b", "c");
//箭头函数 this指向
var prople = {
    name: ["1", "2", "3", "4"],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myName = prople.getName();
alert("名字" + myName().n);
function attr(nameorage) {
    if (nameorage && typeof nameorage === "string") {
        alert("姓名");
    }
    else {
        alert("年龄");
    }
}
attr("hello");
attr(10);
