
// -----------------1------------
// let btn=document.querySelector("button");
// console.dir(btn);

//--------------------2---------------
// btn.onclick=function()
// {
//   console.log("button click")
// }

//-------------3------------


let btns=document.querySelectorAll("button");
for(btn of btns){
  btn.onclick=sayhello;
}

function sayhello(){
  alert("hello!");
 }
 btn.onclick=sayhello;
