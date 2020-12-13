//you code here

console.log ("=========================");
console.log ("First form");
console.log ("=========================");

let myArray = [];
let value = 1;

for (i=0; i<17; i++) {
    myArray[i] = value;
    value = value +1; 
    console.log (myArray[i]); 
}
console.log ("=========================");
console.log ("Second form");
console.log ("=========================");

let listOfHellos = new Array(17).fill("hello");
for (let pos in listOfHellos) {
 console.log (parseInt(pos)+1);
 }