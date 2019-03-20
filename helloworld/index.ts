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




