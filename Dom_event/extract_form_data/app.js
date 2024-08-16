let form=document.querySelector("form");
form.addEventListener("submit",function(event){
  event.preventDefault();

  let user=this.elements[0];    //its  a second method for print 
  let pass=this.elements[1];

  // let user=document.querySelector("#user");
  // let pass=document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);

  alert(`hi ${user.value} your password is set ${pass.value}`);
});