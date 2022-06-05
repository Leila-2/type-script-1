var age = 50;
var person = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
var anything = -20;
anything = "Text";
anything = {};
//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
//Tuple
var student = ["Max", 21];
/*
Опишите enum условие следующее, он должен отображать статус загрузки.
Загружается (LOADING) и загружена (READY).
*/
//Enum
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var page = {
    status: Status.LOADING
};
if (page.status === Status.LOADING) {
    console.log("Идет загрузка");
}
if (page.status === Status.READY) {
    console.log("Успешно загружено");
}
//Сделайте переменную, которая может принимать или строку или число.
//Union
var union;
union = 111;
union = "Done";
//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
//Literal
var literal;
literal = "enable";
literal = "disable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
//Data example
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
