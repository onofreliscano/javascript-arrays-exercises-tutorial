let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

// your code here

const word = "hello World";

let counts = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 1,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 3,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
    
};

//console.log(counts);

console.log("=================================================");
console.log("Object alphabet: " + Object.keys(counts));
console.log("Object length: " + Object.keys(counts).length);

console.log("=================================================");

for (char =0; char <= word.length; char++) {
    console.log(word[char]);
    for (const property in counts) {
        if (property == word[char]) {
            counts[property]  = counts[property] +1;

        }
    }
}

console.log("=================================================");
for (const property in counts) {
    if (counts[property] > 0){
        console.log(`${property}: ${counts[property]}`);
    }
  }

console.log("=================================================");
