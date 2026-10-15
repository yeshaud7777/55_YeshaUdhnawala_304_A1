const fs=require("fs");
const unzipper=require("unzipper");

fs.createReadStream("uploads.zip")
.pipe(unzipper.Extract({path:"extracted"}))
.on("close",()=>{
console.log("Zip Extracted");
});