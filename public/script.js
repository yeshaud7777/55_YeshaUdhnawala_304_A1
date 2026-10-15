function loadData(){

fetch("/gethello")
.then(res=>res.text())
.then(data=>{
document.getElementById("result").innerHTML=data;
});

}