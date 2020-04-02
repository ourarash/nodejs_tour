let test1, test2;

// test1 = 3 == "3";
// test2 = 3 === "3";
// console.log("test1: ", test1, "test2: ", test2);
let arr = [];
console.log('arr.length: ', arr.length);
console.log('arr[3]: ', arr[3]);
console.log("1,6" == [1, 6]);

test1 = null == 0;
test2 = null === 0;
console.log("test1: ", test1, "test2: ", test2);

test1 = null != 0;
test2 = null !== 0;
console.log("test1: ", test1, "test2: ", test2);

test1 = undefined == null;
test2 = undefined === null;
console.log("test1: ", test1, "test2: ", test2);

test1 = 0 == null;
test2 = 0 === null;
console.log("test1: ", test1, "test2: ", test2);

if (undefined) {
  console.log("undefined is taken");
} else {
  console.log("undefined is not taken");
}

let a;
if (a) {
  console.log("undefined is taken");
} else {
  console.log("undefined is not taken");
}

let obj1 = {};
if (obj1.a) {
  console.log("undefined is taken");
} else {
  console.log("undefined is not taken");
}

let obj2 = { a: 0 };
if (obj2.a) {
  console.log("undefined is taken");
} else {
  console.log("undefined is not taken");
}
