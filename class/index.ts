
//属性 / 方法
// class Person {
//     //类的成员属性 public private protected
//     name: string;
//     age: number;
//     interestes: string[];

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
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + "" + this.age;
    }
}

var p = new Person("mumu", 10);
console.log(p.print())

class Person1 {
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell() {
        return this.name + ":" + this.age;
    }
}

class Student extends Person1 {
    school: string;
    constructor(school:string){
        super("mumu",18);
        this.school = school;
    }
    tell() {
        return this.name + ":" + this.age + ":" + this.school;
    }
}

var s = new Student("LOL");
// s.name = "mumu";
// s.age = 18;
// s.school = "lol";
console.log(s.tell());








