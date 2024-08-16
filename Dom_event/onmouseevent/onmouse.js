let btns=document.querySelectorAll("button");

for(btn of btns){
  btn.onmouseenter=function(){
    console.log("you enter in button");
  }
}