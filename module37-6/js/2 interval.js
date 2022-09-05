// console.log("first");
// console.log("second");
// setTimeout(() => {
//   console.log("third");
// }, 3000);
// setInterval(() => {
// //   for (let i = 0; ; i++) {
// //     console.log(i, "fourth");
// //   }
//     console.log("setInterval");
// }, 3000);
// console.log("fourth");
// console.log("fifth");

// let seconds = 0;

// setInterval(() => {
//   console.log(seconds++);
// }, 1000);

// let seconds = 0;

// const setIntervalId = setInterval(() => {
//   console.log(seconds++);
//   if (seconds === 10) {
//     clearInterval(setIntervalId);
//   }
// }, 1000);

// let seconds = 0;

// const setIntervalId = setInterval(() => {
//   if (seconds === 10) {
//     clearInterval(setIntervalId);
//   }
//   console.log(seconds++);
// }, 500);

// let seconds = 0;

// const setIntervalId = setInterval(() => {
//   seconds++;
//   console.log(seconds);
//   if (seconds === 10) {
//     clearInterval(setIntervalId);
//   }
//   //   console.log(seconds++);
// }, 500);

// let seconds = 0;

// const setIntervalId = setInterval(() => {
//   console.log(seconds++);
//   if (seconds === 10) {
//     clearInterval(setIntervalId);
//   }
//   //   console.log(seconds++);
// }, 500);

let seconds = 0;

const setIntervalId = setInterval(() => {
  console.log(++seconds);
  if (seconds === 10) {
    clearInterval(setIntervalId);
  }
  //   console.log(seconds++);
}, 500);
