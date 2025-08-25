/*
Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.
*/
var myNum = 99;
var myStr = "lololo";
var myBool = true;
var unDef = undefined;
function doStuff() {
    var calc = myNum / 3;
    var stringOp = myStr.toUpperCase();
    var oppositeBool = !myBool;
    var moreUndef = "It says ".concat(unDef);
    console.log(calc, stringOp, oppositeBool, moreUndef);
}
doStuff();
