let input=document.querySelector("input");

// ----------keydown---------
// input.addEventListener("keydown",function(){
//   console.log("button is clicked");
  
// })


// ------------keyup--------------
// input.addEventListener("keyup",function(event){
//   console.log("key is=",event.key);
//   console.log("code is =",event.code);
//   console.log("button is clicked");
  
// })
// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//   console.log("button is clicked");
  
// })

// ------------character console for up,down.left,right move------------

input.addEventListener("keydown",function(event){
  console.log("code=",event.code);
  if(event.code=="ArrowUp"){
    console.log("move forward");
  }
  else if(event.code="ArrowDown"){
    console.log("move backword");
  }
  else if(event.code="ArrowLeft"){
    console.log("move  left");
  }
  else if(event.code="ArrowRight"){
    console.log("move  right");
  }
});