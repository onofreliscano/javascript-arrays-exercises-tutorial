var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************
console.log("======================");

console.log("Original array: " + arr);
console.log("======================");

for (i=0; i<10; i++) {
    myRandom = (Math.floor(Math.random() * 20));
    console.log("New Random: " + myRandom);
    arr.push(myRandom);
}
console.log("======================");
console.log("New array: " + arr);