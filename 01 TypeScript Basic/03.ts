/* 
Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.  
*/

let myNum: number = 99
let myStr: string = "lololo"
let myBool: boolean = true
let unDef: undefined = undefined;

function doStuff() {
  let calc = myNum / 3
  let stringOp = myStr.toUpperCase();
  let oppositeBool = !myBool;
  let moreUndef = `It says ${unDef}`
  console.log(calc, stringOp, oppositeBool, moreUndef);
}

doStuff()