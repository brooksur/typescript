"use strict";
console.log("Hi there");
const logSomething = () => {
    console.log("123");
};
logSomething();
const forLoopIterationTimer = (iterations) => {
    let prevTime = Date.now();
    for (let i = 1; i <= iterations; i++) {
        const currentTime = Date.now();
        console.log("Iteration ", i, " ", currentTime - prevTime);
        prevTime = currentTime;
    }
    console.log("Done");
};
forLoopIterationTimer(10000);
