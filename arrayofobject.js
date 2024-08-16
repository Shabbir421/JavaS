// const classinfo=[
//   {
//     name:"aman",
//     grade:"a+"
//   },
//   {
//     name:"vishal",
//     grade:"b+"
//   },
//   {
//     name:"shabbir",
//     grade:"c+"
//   }
// ];


// guessing game by user choise max no.

const max=prompt("enter max number");
const random=Math.floor(Math.random()*10)+1;
let guess=prompt("guess the no.");
while(true){
  if(guess=="quit"){
    console.log("user quit");
    break;
  }
  if(guess==random){
    console.log("you are right");
    break;

  }
  else{
    guess=prompt("you wrong try");
  }
  
}
