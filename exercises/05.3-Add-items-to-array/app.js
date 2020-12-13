//you code here
// Your code here, use the push function and the random function.
/*
let aRandom = Math.floor(Math.random() * 4 + 1);
console.log (aRandom);
let randomArray = new Array(17)
for (let pos in randomArray) {
    randomArray[pos] = Math.floor(Math.random() * 4 + 1); 
    console.log (aRandom[pos]);
}
myStupidArray.push ("LAST ITEM");
*/

var arr = [4,5,734,43,45];
console.log("Original array: " + arr);

let randomList = [];
for (i=0; i<2;i++) {
    randomList[i]=Math.floor(Math.random()* 100 + 1) ;
    arr.push(randomList[i]);
}
console.log("Random numbers array: " + randomList);
console.log("Resulting array: " + arr);



