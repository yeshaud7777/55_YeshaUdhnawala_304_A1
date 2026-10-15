const fs=require("fs");

fs.writeFileSync("demo.txt","Hello");

console.log(fs.readFileSync("demo.txt","utf8"));

fs.appendFileSync("demo.txt","\nWelcome");

console.log(fs.existsSync("demo.txt"));

console.log(fs.readdirSync("."));