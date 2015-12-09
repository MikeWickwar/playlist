$(document).ready(function(){
  console.log("hello world");

})

var getter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/object",
  method: "GET",
  dataType: "json",
});
var pGetter = $.ajax({
  url: "https://lit-fortress-6467.herokuapp.com/post",
  method: "POST",
});
getter.done(function(response){
  console.log(response);
  var a = response;
})
pGetter.done(function(response){
  console.log(response);
  var a = response;
})
