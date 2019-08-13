//了解接口
//第一种创建方式
function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}

var myObj = { label: "hello" };
printLabel(myObj);


//第二种创建方式
interface LabelValue {
  label: string;
}

function printLabel1(labelObj: LabelValue) {
  console.log(labelObj.label);
}

var myObj1 = { label: "mumu" };
printLabel1(myObj1);


//可选属性
interface USB {
  name: string;
  age?: number;
}

function printUSB(pu: USB) {
  console.log(pu.name);
  // console.log(pu.age);
}

// var myUSB = { name: "mumu", age: 18 };
var myUSB = { name: "mumu-1" };
printUSB(myUSB);


//函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  var result = source.search(subString);
  if (result != -1) {
    return true;
  } else {
    return false;
  }
}


//数组类型
interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["mumu", "abc"];
alert(myArray[1]);


//class类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {

  }
}


//接口继承与混合继承
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Sqare extends Shape, PenStroke {
  sideLength: number;
}

//接口继承 <>{}
var s = <Sqare>{};
s.color = "bule";
s.penWidth = 10;
s.sideLength = 10;

// 混合继承
interface Counter {
  interval: number;
  reset(): void;
  (start: number): string;
}

var c: Counter;
c(10);
c.reset();




