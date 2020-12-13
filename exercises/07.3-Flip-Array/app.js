let arr = [45,67,87,23,5,32,60];
let flipped = [];
//Your code here.

for (let i=arr.length-1; i>=0; i-- ){
    //console.log (arr[i]);   
    flipped.push(arr[i]) ;
}

console.log ("Original: " + arr);
console.log ("Flipped: " + flipped);

