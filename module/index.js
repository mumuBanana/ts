/**
 * module模式
 * 1.模块化，可重用
 * 2.封装变量和函数
 */
var vipDate;
(function (vipDate) {
    var stringReg = /^[A-Za-z]+$/;
    var numberReg = /^[0-9]+$/;
    var isStringVipDate = /** @class */ (function () {
        function isStringVipDate() {
        }
        isStringVipDate.prototype.successVipDate = function (s) {
            return stringReg.test(s);
        };
        return isStringVipDate;
    }());
    vipDate.isStringVipDate = isStringVipDate;
    var isNumberVipDate = /** @class */ (function () {
        function isNumberVipDate() {
        }
        isNumberVipDate.prototype.successVipDate = function (s) {
            return s.length === 5 && numberReg.test(s);
        };
        return isNumberVipDate;
    }());
    vipDate.isNumberVipDate = isNumberVipDate;
})(vipDate || (vipDate = {}));
//定时器
var Time;
(function (Time) {
    var Test = /** @class */ (function () {
        function Test(e) {
            this.element = e;
            this.element.innerHTML = "现在的时间是:";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }
        Test.prototype.start = function () {
            var _this = this;
            this.timer = setInterval(function () { return _this.span.innerHTML = new Date().toTimeString(); }, 1000);
        };
        Test.prototype.stop = function () {
            clearInterval(this.timer);
        };
        return Test;
    }());
    Time.Test = Test;
})(Time || (Time = {}));
