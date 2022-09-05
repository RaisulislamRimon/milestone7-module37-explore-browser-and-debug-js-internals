// console.log("first");
// console.log("second");
// console.log("third");
// console.log("fourth");
// console.log("fifth");

// function doSomething() {
//   console.log("do something");
//   console.log("ninth");
// }

// console.log("sixth");
// console.log("seventh");
// console.log("eighth");
// doSomething();
// console.log("tenth");

const doSomething = () => {
  console.log("do something");
  console.log("third");
};

console.log("first");
console.log("second");

setTimeout(doSomething);
setTimeout(() => {
  console.log("Third");
});
setTimeout(() => {
  console.log("After 3 seconds");
}, 3000);
console.log("fourth");
console.log("fifth");
