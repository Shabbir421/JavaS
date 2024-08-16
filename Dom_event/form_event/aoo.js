let form=document.querySelector("form");
form.addEventListener("submit",function(event)   //if event argument its not rdirect next page
{
  event.preventDefault();
  console.log("submit");

});