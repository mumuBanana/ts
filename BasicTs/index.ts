var isboll: boolean = false; //boolean
var num: number = 10; //整数
var str: string = '123'; //'字符串'

// 数组
var list1: number[] = [1, 2, 3]; //数组
var list2: Array<number> = [1, 2, 3]; //数组
var list3: Array<string> = ['1', '2', '3']; //字符串数组

//枚举 
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

//Any
var notSure: any = 10;
notSure = "hello";
notSure = false;

var notList: any[] = [1, "2", false];

//void
function strFun(): string {
  return "123";
}

function numFun(): number {
  return 10;
}

//以上的方法声明需要返回值
//void则不需要返回值
function voidFun(): void {
  alert();
}





