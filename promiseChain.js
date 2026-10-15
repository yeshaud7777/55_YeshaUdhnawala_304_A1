function task1(){

return new Promise(resolve=>{

console.log("Task 1");

resolve();

});

}

function task2(){

return new Promise(resolve=>{

console.log("Task 2");

resolve();

});

}

function task3(){

return new Promise(resolve=>{

console.log("Task 3");

resolve();

});

}

task1()
.then(task2)
.then(task3)
.then(()=>{
console.log("Completed");
});