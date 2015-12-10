$(document).ready(function(){
  console.log("hello world");
})
//ajax calls
var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json",
});
var pGetter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/post",
  method: "POST"
});
//Appending to DOM / logging to console
getter.done(function(response){
  console.log(response);
  for (var i = 0; i < 3; i++) {
    $("#placeImg").append("<img id='img"+[i]+"'class='albumC' src='images/"+getRImgs(response)+"' alt='' />");
  }
})
pGetter.done(function(response){
  console.log(response);
})
