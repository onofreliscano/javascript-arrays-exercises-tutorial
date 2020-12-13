function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
let arraySize = myStupidArray.length;
console.log ("ARRAY: " + myStupidArray);
console.log ("LENGHT: " + arraySize);
console.log ("================================");
myStupidArray.push ("LAST ITEM");
arraySize = myStupidArray.length;
let lastItem = myStupidArray[arraySize -1];
console.log ("NEW ARRAY: " + myStupidArray);
console.log ("NEW LENGHT: " + arraySize);
console.log ("LAST ITEM: " + lastItem);
