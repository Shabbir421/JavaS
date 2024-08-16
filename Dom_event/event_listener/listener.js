let btns=document.querySelectorAll("button");

for (btn of btns){
  // btn.addEventListener("click",sayhello); 
  // btn.addEventListener("click",sayname);
  //------------2----------------
  btn.addEventListener("dblclick",function(){
    console.log("clicked me double");
  });
}
function sayhello(){
  alert("hello");
}
function sayname(){
  alert("shabbir");
}