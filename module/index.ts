/**
 * module模式
 * 1.模块化，可重用
 * 2.封装变量和函数
 */

module vipDate {
  export interface stringVipDate {
    successVipDate(s: string): boolean;
  }

  var stringReg = /^[A-Za-z]+$/;
  var numberReg = /^[0-9]+$/;

  export class isStringVipDate implements stringVipDate {
    successVipDate(s: string): boolean {
      return stringReg.test(s);
    }
  }

  export class isNumberVipDate implements stringVipDate {
    successVipDate(s: string): boolean {
      return s.length === 5 && numberReg.test(s);
    }
  }
}

//定时器
module Time {
  export class Test {
    element: HTMLElement;
    span: HTMLElement;
    timer: number;
    constructor(e: HTMLElement) {
      this.element = e;
      this.element.innerHTML = "现在的时间是:";
      this.span = document.createElement("span");
      this.element.appendChild(this.span);
      this.span.innerHTML = new Date().toTimeString();
    }

    start() {
      this.timer = setInterval(() => this.span.innerHTML = new Date().toTimeString(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }



  }
}








