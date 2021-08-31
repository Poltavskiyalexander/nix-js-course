"use strict";
const hello = (name = null) => {
    if (typeof name === "string") {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Ошибка, не тот тип данных`);
    }
};

hello("Vasya");
hello(123);
