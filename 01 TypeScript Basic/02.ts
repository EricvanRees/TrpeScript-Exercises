/* 
Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.  
*/

var aaName: string = 'My Name'
let aage: number = 33
const color: string = 'Green'

function change() {
  aaName = 'Another name'
  aage = 99
  // color = 'Black'
  return [aaName, aage, color]
}

console.log(change());

