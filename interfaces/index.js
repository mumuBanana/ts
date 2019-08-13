//了解接口
//第一种创建方式
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: "hello" };
printLabel(myObj);
function printLabel1(labelObj) {
    console.log(labelObj.label);
}
var myObj1 = { label: "mumu" };
printLabel1(myObj1);
function printUSB(pu) {
    console.log(pu.name);
    // console.log(pu.age);
}
// var myUSB = { name: "mumu", age: 18 };
var myUSB = { name: "mumu-1" };
printUSB(myUSB);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
var myArray;
myArray = ["mumu", "abc"];
alert(myArray[1]);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
//接口继承 <>{}
var s = {};
s.color = "bule";
s.penWidth = 10;
s.sideLength = 10;
var c;
c(10);
c.reset();
