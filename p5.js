// // ----------------
// todo app  
const prompt=require("prompt-sync")();
let todo =[];
let req=prompt("please enter your req");
while(true){
  if(req=="quit"){
    console.log("quiting app");
    break;
  }
  if(req=="list"){
    console.log("-----------");
    for( let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
  }else if(req=="add"){
    let task =prompt("enter your task you add");
    todo.push(task);
    console.log("task added");
  }
   else if (req=="delete"){
    let idx=prompt("inter your task indx");
    todo.splice(idx,1);
    console.log("task delete");
   }
   else{
    console.log("wrong entry");
   }
   req=prompt("enter your req");
}
// console.log(typeof(0))
// let sum=5;
// function num(a,b){
//   sum=a+b;
  
// }
// num(1,2);
// console.log(sum);