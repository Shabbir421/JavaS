// function of higher order print multiple time 

// function multiplegreet(func ,count){// higher order function
//   for (let i=1; i<=count; i++){
//     func()
//   }
// }
// //  function greet(){
//   let greet=function(){
//   console.log("hello");
//  }

//  multiplegreet(greet,100);




//  part 2
//return function


function oddorevenfactory(request){
  if(request=="odd"){
    let odd=function(n){
      console.log(!(n%2==0));
    }
    return odd;
    
  }else if(request=="even"){
    let even=function(n){
      console.log(n%2==0);
    }
    return even;
  }
  else{
    console.log("wrong req.");
  }
}

 let request="odd";
