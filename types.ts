let age: number = 50;
let person: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = "Text";
anything = {};

//Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}

//Tuple
let student: [string, number] = ["Max", 21];

/*
Опишите enum условие следующее, он должен отображать статус загрузки.
Загружается (LOADING) и загружена (READY).
*/
//Enum
enum Status {
  LOADING,
  READY,
}

const page = {
  status: Status.LOADING,
};

if (page.status === Status.LOADING) {
  console.log("Идет загрузка");
}
if (page.status === Status.READY) {
  console.log("Успешно загружено");
}

//Сделайте переменную, которая может принимать или строку или число.
//Union
let union: string | number;
union = 111;
union = "Done";

//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
//Literal
let literal: "enable" | "disable";
literal = "enable";
literal = "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//Создайте свой тип данных на основе имеющихся данных.

type CustomType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "close" | "open";
  details?: { createAt: Date; updateAt?: Date };
};
//Data example
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
