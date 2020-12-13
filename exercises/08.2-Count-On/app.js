let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let hello = [];
let count = 0;

for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    //console.log (element);
    if (typeof(element) == "object" ){
        hello.push(element);
        count++;
    }
    // MAGIC HAPPENS HERE
}

console.log("Hello array has " + count + " objects: " + hello);