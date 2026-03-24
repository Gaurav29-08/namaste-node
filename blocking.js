const crypto = require("crypto");

console.log("hello world");


var a = 10;
var b = 20;


//block the main thread
//pbkdf2 - password base key Derative function 

crypto.pbkdf2Sync("password","salt", 5000000,50,"sha512");
console.log("first key is Generated");


crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
  console.log("second key is genreated");
  
});


function multy(x,y){
  const result = a*b;
  return result;
}

const total = multy(a,b);
console.log(total);



// const fs = require("fs");

// const data = fs.readFileSync("file.txt"); // ⛔ blocking
// console.log(data.toString());

// console.log("Next line");