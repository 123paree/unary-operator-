let a:number=5;
let b:number=2;
//  c = 6   +  7  +  1  +  0  + 7 +  1  + 1
let c:number= ++a + ++a + --b + b-- + a + b++ + b;
console.log(c);
