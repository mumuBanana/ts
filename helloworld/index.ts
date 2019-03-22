//hello world

document.getElementById("hello").innerHTML = "Hello World";


//第一个例子
function area(shape : string, width: number, height: number){
    let area = width * height;
    return "I`m a "+ shape +" width an area of "+ area +" cm squared.";
}
document.getElementById("dome1").innerHTML = area("mumu", 30 ,20);

//第二个例子
// let myName : string = 'mumu';
// let myAge : number = 24;
// let sentence : string = `Hello , my name is ${myName} . I'll be ${myAge + 1} years old next month.`
// document.getElementById("dome2").innerHTML = sentence;

function aa(myName : string , myAge : number) {
    let sentence : string = `Hello , my name is ${myName} . I'll be ${myAge + 1} years old next month.`
    return sentence;
}
document.getElementById("dome2").innerHTML = aa("mumu" , 24);

//第三个例子 任意值类型
//如果是一个普通类型，在赋值过程中改变类型是不被允许的,会直接报错
// let myFavoriteNumber : string = 'seven';
// myFavoriteNumber = 7;

//如果是 any 类型，则允许被赋值为任意类型

let myFavoriteNumber : any = 'seven';
myFavoriteNumber = 7;


//第四个例子
let dome3 = document.getElementById("dome3");
let anyThing : any = 'hello';
function setName(name : any){
    return name;
}
dome3.innerHTML = anyThing;
setTimeout(() => {
    anyThing = setName('Tom');
    dome3.innerHTML = anyThing;
},2000)

//第五个例子
//定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致
//接口一般首字母大写,这是正确写法
interface Person {
    name : string,
    age : number
}

let tom : Person = {
    name : 'mumu',
    age : 22
}

//错误写法
//(1)定义的变量比接口少了一些属性是不允许的
//  let tom : Person = {
//      name : 'mumu'
//  }

//(2)多一些属性也是不允许的
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };


//可选属性
//age属性是可选属性，可以存在也可以不存在
interface Aab {
    name : string,
    age ?: number
}

let abc : Aab = {
    name : 'mumu'
}

//任意属性
//下面是正确写法 
//注意 ： 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集 //[propName : string] : string 
interface Abb {
    name : string,
    age ?: number,
    [propName : string] : any
}

let aBB : Abb = {
    name : 'mumu',
    age : 12,
    gender : 'modle'
}

//只读属性
interface Baa {
    readonly id : number,
    name : string,
    age ?: number,
    [propName : string] : any
}

let bAA : Baa = {
    id : 12345,
    name : 'mumu',
    gender : 'modle' //因为定义了任意属性 所以这里可以是任意类型 比如：[] , {} , string , number
}


//数组的类型
//「类型 + 方括号」来表示数组
let fibonacci : number[] = [1,2,3,4,5,6]
//数组的项中不允许出现其他的类型
// let fibonacci1 : number[] = [1,2,3,4,'5',6]
//只允许传入number类型的参数
// fibonacci1.push('8')


//泛型
function createArray(length : number , value : any) : Array<any> {
    let result = [];
    for(let i = 0; i < length ; i++){
        result[i] = value;
    }
    console.log(result);
    return result;
}

createArray(4 , 'x'); //['x','x','x','x']

//泛型约束
//只允许这个函数传入那些包含 length 属性的变量
interface lengthwise {
    length : number
}

function logging<T extends lengthwise>(arg : T) : T {
    console.log(arg.length);
    return arg;
}

logging([1,2,3,4,5,6,7]);

//函数额类型
//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
function myNum(x : number , y : number) : number {
    console.log(x + y);
    return x + y;
}
myNum(1,2)
//注意，输入多余的（或者少于要求的）参数，是不被允许的
// myNum(1)
// myNum(1,2,3)


//函数表达式
let Sum : (x : number , y : number) => number = function(x : number , y : number) : number {
    console.log(x * y)
    return x * y;
}
Sum(3 , 5);

//可选参数
function buildName(firstName : string , lastName ?: string) {
    if(lastName){
        return firstName + ' ' + lastName;
    }else {
        return lastName;
    }
}
buildName('tom' , 'cat')

//将一个联合类型的变量指定为一个更加具体的类型

function getLength(some : string | number) : number {
    if((<string>some).length){
        return (<string>some).length;
    }else {
        return some.toString().length;
    }

}


//类型别名
//类型别名用来给一个类型起个新名字。
type names = string;
type nameResolver = () => string;
type nameOrResolver = names | nameResolver;
function getName(n : nameOrResolver) : names {
    if (typeof n === 'string') {
        return n
    } else {
        return n();
    }
}

//元祖
//定义一对值分别为 string 和 number 的元组
let xctitle : [string , number] = ['mao' , 25];

//定义一对值分别为 string 和 number 的元组

let xctitle1 : [string , number];
xctitle1[0] = 'tom';
xctitle1[1] = 25;

xctitle1[0].slice(1);
xctitle1[1].toFixed(2);

//也可以只赋值其中一项
xctitle1[0] = 'tom';

//直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
xctitle1 = ['tom' , 22];

//不能这样操作
//(1) let xctitle2 : [string , number] = ['tom' ];
//(2) let xctitle2 : [string , number];
//    xctitle2 = ['tom'];
//    xctitle2[1] = 25;









