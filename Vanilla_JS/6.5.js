var arry = new Array(100);
arry.fill("Filled");

// ---------------------------------------------2
var arry2 = new Array(100);
let arr3 = Array.from(arry2, (v, i) => i);

//--------------------------------------------- 3
const obj = { 1: "val1", 2: "val2", 3: "val 3 " };
const obj_arr = Object.values(obj);

// ---------------------------------------------4

const arr1 = [12, 3, 55, 4];

const arr_to_obj = Object.assign({}, arr1);

// --------------------------------------------- 5

Array.isArray(arr_to_obj);

//#region ---------------------------------6 , 7

const arr2 = [12, 3, 55, 4];

// Shallow copy 1

const clone_arr = arr2;
console.log(clone_arr + "-------   Shallow copy ,befor new item ");
clone_arr.push(100);
console.log(arr2 + "------- Shallow copy ,after new item  ");

// Shallow copy 2

const clone_arr1 = [...arr2];
console.log(arr2 + "-------   Shallow copy ,befor new item ");
clone_arr1.push(100);
console.log(arr2 + "------- Shallow copy ,after new item  ");

//Deep copy

const clone_arr2 = JSON.parse(JSON.stringify(arr2));
console.log(clone_arr2 + "------- Deep copy ,befor new item IN arr2");
arr2.push(3000);
console.log(
  clone_arr2 + "------- Deep copy ,after new item in arr2 (no 3000) "
);

//#endregion
