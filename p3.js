// for(let i=0;i<=5;i++){
//   console.log(i);
// }


// ------------
const favmovie="avtar";
let guess=prompt("guess my movie");
while((guess!=favmovie)&&(guess!="quit")){
  guess=prompt("wrong guess");
}
if(guess==favmovie){
  console.log("congrats");
}else{
  console.log("quit");
}