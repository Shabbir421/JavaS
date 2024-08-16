let sum=54;     //globle scope
function calsum(a,b){
 let sum=a+b;     //function scope
  console.log(sum);
}
calsum(2,3);
console.log(sum);