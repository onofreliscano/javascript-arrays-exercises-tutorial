let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
        // magic goes inside these brackets
        switch(item) {
            case 0:
                return_array.push("Yahoo");
                break;
            case 1:
                return_array.push(1);
                break;
        }    
           
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));