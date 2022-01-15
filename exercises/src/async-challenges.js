// 1. Print "Hello, world" with a delay of 3 seconds
setTimeout(() => {
  console.log("Hello, world");
}, 3000);

// 2. Create a function which receives a function as argument and executes it after 2 seconds
function runWithDelay(cb) {
  setTimeout(() => {
    cb();
  }, 2000);
}
