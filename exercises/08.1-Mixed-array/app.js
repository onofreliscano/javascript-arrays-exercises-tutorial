var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
var types = [];

//your code here

for (i in mix) {
    let item = mix[i];
    //console.log(typeof item);
    types.push(typeof item);
}

console.log ("Original: " + mix);
console.log ("Type of: " + types);
