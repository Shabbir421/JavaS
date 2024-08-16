// concate of stringh using function

let str=["hi","hello"];

function concat(str){
  let result ="";
  for(let i=0; i<str.length;i++){
    result+=str[i];
  }
  return result;
}