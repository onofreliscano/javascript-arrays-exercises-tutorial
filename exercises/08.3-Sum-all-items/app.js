function sumTheElements(theArray){
	var total = 0;
	//your code here
	for (i=0; i<=theArray.length-1; i++){
		total = total + theArray[i];
	}
	return total;
}

console.log("Sum of all items: " + sumTheElements([2,13,34,5]));

