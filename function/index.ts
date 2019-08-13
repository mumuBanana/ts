
//有名函数 ， 匿名函数
// function test() {
// }
// var test2 = function () {
// }

function test(n: string): number {
    return 10;
}

//参数可选性 
function test2(n: string, age?: number): string {
    return "昵称:" + n + ",年龄:" + age
}

function test3(n: string, age = 19): number {
    return age;
}

//匿名函数的函数声明
let test4: (n: string, age: number) => number = function (n: string, age: number): number {
    return 100;
}

// alert(test("1"));
// alert(test2("mumu", 12));
// alert(test3("mumu", 45));
// alert(test4("mumu", 45));



//可变参数
//可变参数的格式： ...参数名称: 类型[]
function test5(n: string, ...parmas: any[]): string {
    return parmas.join("-");
}

alert(test5("mumu", "is", 125, "asdf"))



//函数的重载
function test6(c: any): any {
    if (c && typeof c === "string") {
        alert("string")
    } else {
        alert("number")
    }
}

test6(1);



//复习

function add(x: number, y: number): number {
    return x + y;
}

var myAdd = function (x: string, y: string): string {
    return x + y;
}

var myAddTs: (name: string, age: number) => number = function (n: string, a: number): number {
    return a;
}

function buildName(firstName?: string, lastName?: string) {
    if (lastName) {
        return firstName + "" + lastName;
    } else {
        return firstName;
    }
}

var result1 = buildName("a", "b");
var result2 = buildName("a");
// var result3 = buildName("a","b","c");
var result4 = buildName();

function buildName1(firstName: string, lastName = "b") {
    return firstName + "" + lastName;
}

var result5 = buildName1("a");
var result6 = buildName1("a", "c");
// var result7 = buildName1("a","c","d");

//可变参数  ...restOfName:string[]

function propleName(firstName: string, ...restOfName: string[]) {
    return firstName + "" + restOfName.join("");
}

var pn = propleName("a", "b", "c");


//箭头函数 this指向
var prople = {
    name: ["1", "2", "3", "4"],
    getName: function () {
        return () => {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}

var myName = prople.getName();
alert("名字" + myName().n)

//函数的重载

function attr(name:string):string;
function attr(age:number):number;

function attr(nameorage:any):any {
    if(nameorage && typeof nameorage === "string"){
        alert("姓名");
    }else{
        alert("年龄");
    }
}

attr("hello");
attr(10);





























