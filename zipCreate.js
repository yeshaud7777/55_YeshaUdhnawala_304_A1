const fs=require("fs");
const archiver=require("archiver");

const output=fs.createWriteStream("uploads.zip");

const archive=archiver("zip");

archive.pipe(output);

archive.directory("uploads/",false);

archive.finalize();

console.log("Zip Created");