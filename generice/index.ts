//泛型
function Hello<T>(arg: T): T {
  return arg;
}

var output = Hello<string>("hello mumu");
console.log(output);


//泛型类型

function tell<T>(arg: T): T {
  return arg;
}

var myTell: <K>(arg: K) => K = tell;
console.log(myTell("mumu"));







