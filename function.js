function print1to5() {
  for(let i=1; i<=5; i++) {
    console.log(i);
  }
}

function isadult() {
  let age=18;
  if(age>=18) {
    console.log("adult");
  }
}

isadult();

function printinfo(name,age) {
  console.log(`${name}'s age is ${age}.`);
}

printinfo("vishal",20);