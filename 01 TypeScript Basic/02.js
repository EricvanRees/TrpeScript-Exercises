/*
Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.
*/
var aaName = 'My Name';
var aage = 33;
var color = 'Green';
function change() {
    aaName = 'Another name';
    aage = 99;
    // color = 'Black'
    return [aaName, aage, color];
}
console.log(change());
