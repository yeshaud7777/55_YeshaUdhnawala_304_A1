const fs=require("fs");
const util=require("util");

const unlink=util.promisify(fs.unlink);

unlink("delete.txt")
.then(()=>{
console.log("Deleted");
})
.catch(console.error);