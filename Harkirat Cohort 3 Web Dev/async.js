const fs= require("fs");
//file module// package // library
fs.readfile("a.txt","utf-8", func(err, data)){
console.log(data);
}
console.log("Async");
for (let i=0;i<1000000000000;i++){
a++;
}
console.log ("Async called");
